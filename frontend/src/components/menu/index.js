import React from 'react'
import PropTypes from 'prop-types'
import { AsideMenu } from './styled'

const Menu = ({ children }) => {
  return (
    <AsideMenu>
      {children}
    </AsideMenu>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired
}

export default Menu