import React from 'react'
import PropTypes from 'prop-types'
import { CardBody, DivStyled } from './styled'

const Card = ({ discovery }) => {
  const { found, description, dateTime, comments } = discovery
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
      <DivStyled>
        <p>{`Comentáio: ${comments}`}</p>
      </DivStyled>
    </CardBody>
  )
}

Card.propTypes = {
  discovery: PropTypes.object.isRequired
}

export default Card