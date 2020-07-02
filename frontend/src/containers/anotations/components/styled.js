import styled from 'styled-components'

export const CardBody = styled.div`
  display: flex;
  border: solid 3px #000;
  border-radius: 25px;
  width: 300px;
  margin: 10px;
  display: inline-block;
  height: 200px;
  box-shadow: 5px 3px 3px #000;

  @media(max-width: 768px) {
    width: 90%;
  }
`
export const DivStyled = styled.div`
  margin: 10px;
  height: 17%;

  p {
    text-align: center;
    position: relative;
    top: 5px;
  }
`