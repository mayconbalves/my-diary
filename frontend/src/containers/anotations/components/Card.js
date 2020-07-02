import React from 'react'
import PropTypes from 'prop-types'
import { CardBody, DivStyled, DivButton } from './styled'

const Card = ({ discovery }) => {
  const { found, description, dateTime} = discovery
  return (
    <CardBody>
      <DivStyled>
        <p>{`Item: ${found}`}</p>
      </DivStyled>
      <DivStyled>
        <p>{`Descrição: ${description}`}</p>
      </DivStyled>
      <DivStyled>
        <p>{`Hora: ${dateTime}`}</p>
      </DivStyled>
      <DivButton>
        <button>Comentar</button>
      </DivButton>
    </CardBody>
  )
}

Card.propTypes = {
  discovery: PropTypes.object.isRequired
}

export default Card