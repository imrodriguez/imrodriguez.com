import React from 'react'
import { Line, Grid, Title, Date, Place } from './Timeline.styles'
import { Button, Container } from 'styles/global'

export default (props) => (
  <Container align="center">
    <Line>
      <Grid>
        {props.timeline.map((item, index) => {
          return (
            <div key={index} style={{'grid-row-start': `${index + 1}`}}>
              <Title>{item.title}</Title>
              <Date>{item.start} - {item.end}</Date>
              <Place>{item.place}</Place>
            </div>  
          )
        })}
      </Grid>
    </Line>
    {
      props.limited
        ? <a href="/timeline"><Button>Ver más</Button></a>
        : <></>
    }
  </Container>
)
