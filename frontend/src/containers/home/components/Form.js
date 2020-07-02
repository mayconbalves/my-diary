import React, { useState } from 'react'
import { hoursMask } from '../../../components/utils/mask'
import { InputStyled, FormStyled, FormField, ButtonStyled } from './styled'

const FormContainer = ({ handleSubmitForm }) => {
  const [values, setValues] = useState(
    {found: '', description: '', dateTime: '', comments: ''})

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }
  
  const submitForm = () => {
    handleSubmitForm(values)
    setValues({ found: '', description: '', dateTime: '', comments: '' })

  }

  const { found, description, dateTime, comments } = values
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
        <h4>Comentários:</h4>
        <InputStyled
          type="text"
          name="comments"
          placeholder="Digite o seu comentário"
          value={values.comments}
          onChange={handleInputChange}
        />
      </FormField>

      <FormField>
      {
        found && description && dateTime && comments &&
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