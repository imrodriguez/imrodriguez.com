import React, { useState, useEffect } from 'react'
import { Menu, MenuItems, Logo } from './Nav.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
  const [transparent, setTransparent] = useState(true)
  const [menuMobile, toggleMenu] = useState(false)
  const [selected, setSelected] = useState('')

  useEffect(() => {
    if (props.transparent && window.scrollY > 15) setTransparent(false)

    if (props.transparent) {
      window.onscroll = () => {
        if (window.scrollY < 15) {
          setTransparent(true)
        } else if (transparent === true) {
          setTransparent(false)
        }
      }
    }
  })

  useEffect(() => {
    if (!props.transparent) setTransparent(false)

    setSelected('')
    props.links.map((link, index) => {
      if (link.relative === window.location.pathname) {
        setSelected(index)
      }
    })
  })

  const handleMenu = () => {
    toggleMenu(menuMobile ? false : true)
  }

  const handleLink = (index) => {
    setSelected(index)
    toggleMenu(menuMobile ? false : true)
  }

  return (
    <Menu transparent={transparent}>
      <Logo>
        {menuMobile
          ? <FontAwesomeIcon icon={faTimes} size="xs" onClick={handleMenu} />
          : <FontAwesomeIcon icon={faBars} size="xs" onClick={handleMenu} />
        }
        <p><a href="/">imrodriguez</a></p>
      </Logo>
      <MenuItems open={menuMobile}>
        {props.links.map((link, index) => (
          link.relative ?
            <a href={link.relative} key={index} onClick={() => handleLink(index)}>
              <li className={index === selected ? 'selected' : ''}>{link.title}</li>
            </a>
            :
            <></>
        )
        )}
      </MenuItems>
    </Menu >
  )
}

export default Nav
