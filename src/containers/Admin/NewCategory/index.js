import { yupResolver } from '@hookform/resolvers/yup'
import UploadIcon from '@mui/icons-material/Upload'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom/'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, Button, LabelUpload } from './styles'

export function NewCategory() {
  const [fileName, setFileName] = useState(null)

  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('The product must have a name.'),
    file: Yup.mixed()
      .test('required', 'Upload an image.', value => {
        return value?.length > 0
      })
      .test('fileSize', 'File size is too big.', value => {
        return value[0]?.size <= 200000
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const categoryDataFormData = new FormData()

    categoryDataFormData.append('name', data.name)

    categoryDataFormData.append('file', data.file[0])

    await toast.promise(api.post('/categories', categoryDataFormData), {
      pending: 'Creating new product...',
      success: 'Product was successfully created.',
      error: 'Error while creating product, try again later...'
    })
    setTimeout(() => {
      push('/list-products')
    }, 2000)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Name</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
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
        </div>
        <Button onSubmit={onSubmit()}>Add Category</Button>
      </form>
    </Container>
  )
}

export default NewCategory
