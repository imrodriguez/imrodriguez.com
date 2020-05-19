import React from 'react'
import Link from 'next/link'
import { Line, Grid, Title, Date, Place } from './Timeline.styles'
import { Button, Container } from 'styles/global'

export default (props) => (
  <Container align="center">
    <Line>
      <Grid>
        {props.timeline.map((item) => {
          return (
            <div>
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
        ? <Link href="/timeline"><a><Button>Ver más</Button></a></Link>
        : <></>
    }
  </Container>
)
