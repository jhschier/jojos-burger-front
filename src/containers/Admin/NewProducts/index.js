import UploadIcon from '@mui/icons-material/Upload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { Container, Label, Input, Button, LabelUpload } from './styles'

export function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { register, handleSubmit, control } = useForm()
  const onSubmit = data => console.log(data)
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      console.log(data)
      setCategories(data)
    }
    loadCategories()
  }, [])
  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Name</Label>
        <Input type="text" {...register('name')} />

        <Label>Price</Label>
        <Input type="number" {...register('price')} />

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
        <Controller
          name="category_id"
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
        <Button>Add Product</Button>
      </form>
    </Container>
  )
}

export default NewProduct
