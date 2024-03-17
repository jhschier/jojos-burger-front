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

export function EditCategory() {
  const [fileName, setFileName] = useState(null)

  const {
    push,
    location: {
      state: { category }
    }
  } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('The product must have a name.')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async data => {
    const categoryDataFormData = new FormData()

    console.log(categoryDataFormData)

    categoryDataFormData.append('name', data.name)
    categoryDataFormData.append('categoryId', data.categoryId)
    categoryDataFormData.append('file', data.file[0])

    await toast.promise(
      api.put(`categories/${category.id}`, categoryDataFormData),
      {
        pending: 'Editing Category...',
        success: 'Category was successfully edited.',
        error: 'Error while editing category, try again later...'
      }
    )
    setTimeout(() => {
      push('/list-categories')
    }, 2000)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={category.name}
          />
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

        <Button>Edit Category</Button>
      </form>
    </Container>
  )
}

export default EditCategory
