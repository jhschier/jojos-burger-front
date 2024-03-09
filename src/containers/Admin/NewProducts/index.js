import UploadIcon from '@mui/icons-material/Upload'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { Container, Label, Input, Button, LabelUpload } from './styles'

export function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  useEffect(() => {
    async function createProduct() {
      const { data } = await api.post('products')
    }
  }, [])
  return (
    <Container>
      <form noValidate>
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

        <ReactSelect />

        <Button>Add Product</Button>
      </form>
    </Container>
  )
}

export default NewProduct
