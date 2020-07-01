import React from 'react'
import PropTypes from 'prop-types'
import { NavBar } from './styled'

const NavContainer = ({ title }) => {
  return (
    <NavBar>
      <h1>{title}</h1>
    </NavBar>
  )
}

NavContainer.propTypes = {
  title: PropTypes.string.isRequired
}

export default NavContainer

