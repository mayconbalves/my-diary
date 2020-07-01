import React from 'react'
import { AsideMenu, List } from './styled'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <AsideMenu>
      <List>
        <li><Link to="/">menu 1</Link></li>
        <li><Link to="/anotations">menu 2</Link></li>
      </List>
    </AsideMenu>
  )
}

export default Menu