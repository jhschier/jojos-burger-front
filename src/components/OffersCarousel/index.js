import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  H2Offers,
  ContainerItems,
  Image,
  Button,
  OfferP
} from './styles'

function OffersCarousel() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })
      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
  return (
    <Container>
      <H2Offers>Offers</H2Offers>
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="product-image" />
              <OfferP>{product.name}</OfferP>
              <OfferP>{product.formatedPrice}</OfferP>
              <Button>Order Now!</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}

export default OffersCarousel
