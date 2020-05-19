import React from 'react'
import Link from 'next/link'
import { Container } from 'styles/global'
import { IconList } from './Whoami.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default (props) => (
  <Container align="center" style={{'margin-top': '-30px'}}>
    <IconList>
      <Link href="https://github.com/imrodriguez"><a target="_blank" aria-label="Github"><FontAwesomeIcon icon={faGithub} size="xs" /></a></Link>
      <Link href="https://www.linkedin.com/in/imanol-rodriguez-de-maya-47bb1376/"><a target="_blank" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} size="xs" /></a></Link>
      <Link href="https://www.instagram.com/metacharset/"><a target="_blank" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} size="xs" /></a></Link>
    </IconList>
    <div dangerouslySetInnerHTML={{ __html: props.whoami[0].body }}></div>
  </Container>
)
