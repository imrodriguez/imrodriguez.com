import React from 'react'
import { Container } from 'styles/global'
import { IconList } from './Whoami.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default (props) => (
  <Container align="center" style={{'margin-top': '-30px'}}>
    <IconList>
      <a href="https://github.com/imrodriguez" rel="noreferrer" target="_blank" aria-label="Github"><FontAwesomeIcon icon={faGithub} size="xs" /></a>
      <a href="https://www.linkedin.com/in/imanol-rodriguez-de-maya-47bb1376/" rel="noreferrer" target="_blank" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} size="xs" /></a>
      <a href="https://www.instagram.com/metacharset/" rel="noreferrer" target="_blank" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="xs" /></a>
    </IconList>
    <div dangerouslySetInnerHTML={{ __html: props.whoami[0].body }}></div>
  </Container>
)
