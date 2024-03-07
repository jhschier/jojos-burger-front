import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { Container, Label, Input, Button } from './styles'

export function NewProduct() {
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

        <Label>Image Upload</Label>
        <Input type="file" accept="image/png, image/jpeg, image/jpg" />

        <ReactSelect />

        <Button>Add Product</Button>
      </form>
    </Container>
  )
}

export default NewProduct
