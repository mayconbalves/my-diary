import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AsideMenu = styled.div`
  grid-area: aside;
  border: solid rgb(0, 0, 0);
  border-width: 0 3px 3px;
  height: 100%;
  max-width: 263px;
`
export const List = styled.ul`
  list-style: none;
  
  li {
    background-color: blue;
    height: auto;
    text-align: center;
  }
`

export const StyledLink = styled(Link)`
  color: #000;
  display: block;
  padding: 15px;
  text-decoration: none;

  &:hover {
    color: #f00;
  }
`