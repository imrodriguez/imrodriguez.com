import React from 'react'
import { HeaderWrapper, Grid, Title, Name, FirstName, LastName } from './Header.styles'

export default (props) => (
  <HeaderWrapper style={{position: 'relative'}}>
    <img src={`${process.env.API_URL}${props.header[0].image}`} alt={props.header[0].title} />
    <Grid>
      <div>
        <Title>{props.header[0].title}</Title>
        <Name>
          <FirstName>{props.header[0].name}</FirstName>
          <LastName>{props.header[0].surname}</LastName>
        </Name>
      </div>

    </Grid>
  </HeaderWrapper>
)
