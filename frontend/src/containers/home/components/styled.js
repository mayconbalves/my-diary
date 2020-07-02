import styled from 'styled-components'

export const InputStyled = styled.input`
  flex-grow: 1;
  font-size: 1rem;
  line-height: 2rem;
  vertical-align: middle;
  width: 250px;
  &::-webkit-input-placeholder {
    color: gray;
  }
`

export const FormStyled = styled.form`
  display: grid;
  border: 2px solid #000;
  margin: 10% auto;
  width: 500px;
  h1 {
    text-align: center;
  }
  &:hover {
    box-shadow: 10px 5px 5px black;
  }

  @media(max-width: 768px) {
    width: 90%;
    min-width: 300px;
  }
`

export const FormField = styled.div`
  margin: 5%;
`

export const ButtonStyled = styled.button`
  padding: 10px;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`