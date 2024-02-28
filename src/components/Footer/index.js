import React from 'react'

import { FooterContainer, FooterText } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Made by{' '}
        <a href="https://www.linkedin.com/in/joao-schier/"> João Schier</a>®
      </FooterText>
    </FooterContainer>
  )
}
