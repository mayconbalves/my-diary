import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 8% 92%;
  grid-template-areas:
    "nav nav nav nav"
    "aside content content content";

  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`