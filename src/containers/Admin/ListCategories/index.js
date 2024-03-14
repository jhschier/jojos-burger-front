import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Container, Img, EditIconImg } from './styles'

export function ListCategories() {
  const { push } = useHistory()
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [categories])

  function editCategory(category) {
    push(paths.EditCategory, { category })
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories &&
              categories.map(cat => (
                <TableRow
                  key={cat.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {cat.name}
                  </TableCell>
                  <TableCell align="center">
                    <Img src={cat.url} alt="product-image" />
                  </TableCell>
                  <TableCell>
                    <EditIconImg onClick={() => editCategory(categories)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListCategories
