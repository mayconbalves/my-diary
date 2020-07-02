import React, { useState } from 'react'
import styled from 'styled-components'
import { hoursMask } from '../../../components/utils/mask'

const InputStyled = styled.input`
  flex-grow: 1;
  font-size: 1rem;
  line-height: 2rem;
  vertical-align: middle;
  width: 250px;
  &::-webkit-input-placeholder {
    color: gray;
  }
`

const FormStyled = styled.form`
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
`

const FormField = styled.div`
  margin: 5%;
`

const ButtonStyled = styled.button`
  padding: 10px;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`

const FormContainer = ({ handleSubmitForm }) => {
  const [values, setValues] = useState({found: '', description: '', dateTime: ''})

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }
  
  const submitForm = () => {
    handleSubmitForm(values)
    setValues({ found: '', description: '', dateTime: '' })
  }

  const { found, description, dateTime } = values
  return (
    <FormStyled>
      <h1>Minhas Descobertas:</h1>

      <FormField>
        <h4>Item achado:</h4>
        <InputStyled
          type="text"
          name="found"
          placeholder="Item"
          value={values.found}
          onChange={handleInputChange}
        />
      </FormField>

      <FormField>
        <h4>Como é o item:</h4>
        <InputStyled
          type="text" 
          name="description"
          placeholder="Descreva o item"
          value={values.description}
          onChange={handleInputChange}
        />
      </FormField>

      <FormField>
        <h4>Horas e minutos:</h4>
        <InputStyled
          type="text"
          name="dateTime"
          placeholder="Escolha a hora e os minutos"
          value={hoursMask(values.dateTime)}
          onChange={handleInputChange}
        />
      </FormField>

      <FormField>
      {
        found && description && dateTime &&
        <ButtonStyled
          id="send-button"
          type='button' 
          onClick={submitForm}
        >
          Enviar
        </ButtonStyled>
      }
      </FormField>
    </FormStyled>
  )
}

export default FormContainer