import styled from 'styled-components'

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
    border: 1px solid #000;
    height: auto;
    text-align: center;
  }

  a {
    display: block;
    padding: 15px;
  }
`