import React from 'react'
import { Wrapper, Title, Subtitle } from './Title.styles'
import { Container } from 'styles/global'

export default (props) => (
  <Container>
    <Wrapper>
      <Title>{props.title}</Title>
      <Subtitle>{props.description}</Subtitle>
    </Wrapper>
  </Container>
)