import React from 'react'
import { AsideMenu, List, StyledLink } from './styled'

const Menu = () => {
  return (
    <AsideMenu>
      <List>
        <li><StyledLink to="/">Adicionar descoberta</StyledLink></li>
        <li><StyledLink to="/anotations">Todas descobertas</StyledLink></li>
      </List>
    </AsideMenu>
  )
}

export default Menu