import React from 'react'
import styled from 'styled-components'

import Container from '../../components/grid'
import NavBar from '../../components/navbar'
import Aside from '../../components/menu'
import Content from '../../components/main-container'

const InputStyled = styled.input`
  flex-grow: 1;
  font-size: 1rem;
  line-height: 2rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: gray;
  }
`

const FormStyled = styled.form`
  border: 2px solid #000;
  margin: 10% auto;
  width: 500px;
`

const FormField = styled.div`
  margin: 5%;

  button {
    padding: 10px;
  }
`

const homeContainer = () => {
  return (
    <Container>
      <NavBar title='Meu diário, meus registros' />
      <Aside />
      <Content>
        <FormStyled>
          <h1>Minhas Descobertas:</h1>

          <FormField>
            <h4>Item achado:</h4>
            <InputStyled className="" type="text" placeholder="Item"></InputStyled>
          </FormField>

          <FormField>
            <h4>Como é o item:</h4>
            <InputStyled className="" type="text" placeholder="Descreva o item"></InputStyled>
          </FormField>

          <FormField>
            <h4>Que horas foi achado:</h4>
            <InputStyled className="" type="text" placeholder="Escolha a hora"></InputStyled>
          </FormField>

          <FormField>
            <button>Enviar</button>
          </FormField>
        </FormStyled>
      </Content>
    </Container>
  )
}

export default homeContainer