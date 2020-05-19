import React from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'
import { Container, Layer, Grid, Project, Content, Title } from './Projects.styles'
import { Button } from 'styles/global'

export default (props) => (
  <Container>
    <LazyLoad height={200}>
      <Grid>
        {props.projects.map((project, index) => {
          return (
            <Project>
              <a href={`/project/${project.path}`}>
                <Layer />
                <img src={`${process.env.API_URL}${project.image}`} alt={project.title} alt={project.title} />
                <Content>
                  <Title>{project.title}</Title>
                  <p>{project.description}</p>
                </Content>
              </a>
            </Project>
          )
        })}
      </Grid>
    </LazyLoad>
    {
      props.limited
        ? <Link href="/projects"><a><Button>Ver más</Button></a></Link>
        : <></>
    }
  </Container>
)
