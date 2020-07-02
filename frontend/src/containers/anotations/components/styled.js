import styled from 'styled-components'

export const CardBody = styled.div`
  border: solid 3px #000;
  border-radius: 25px;
  width: 350px;
  margin: 10px;
  display: inline-block;
  height: 200px;
  box-shadow: 5px 3px 3px #000;
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

export const DivButton = styled.div`
  margin: 10px;

  button {
    padding: 10px;

    &:hover {
      background-color: #fff;
      cursor: pointer;
    }
  }
`