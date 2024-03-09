import { yupResolver } from '@hookform/resolvers/yup'
import UploadIcon from '@mui/icons-material/Upload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, Button, LabelUpload } from './styles'

export function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])

  const schema = Yup.object().shape({
    name: Yup.string().required('The product must have a name.'),
    price: Yup.string().required('The product must have a price.'),
    category: Yup.object().required('You must choose a category.'),
    file: Yup.mixed()
      .test('required', 'Upload an image.', value => {
        return value && value.length > 0
      })
      .test('fileSize', 'File size is too big.', value => {
        return value && value[0].size <= 200000
      })
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Name</Label>
        <Input type="text" {...register('name')} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Price</Label>
        <Input type="number" {...register('price')} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <LabelUpload>
          {fileName || (
            <>
              <UploadIcon />
              Choose image
            </>
          )}

          <Input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>
        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Select Category"
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <Button>Add Product</Button>
      </form>
    </Container>
  )
}

export default NewProduct
