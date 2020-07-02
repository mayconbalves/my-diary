import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 8% 92%;
  grid-template-areas:
    "nav nav nav nav"
    "aside content content content";
  overflow: auto;

  @media(max-width: 768px) {
    display: block;
  }
`