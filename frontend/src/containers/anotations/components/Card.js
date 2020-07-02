import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const CardBody = styled.div`
  border: solid 3px #000;
  border-radius: 25px;
  width: 350px;
  margin: 10px;
  display: inline-block;
  height: 200px;
  box-shadow: 5px 3px 3px #000;
`
const DivStyled = styled.div`
  margin: 10px;
  height: 17%;

  p {
    text-align: center;
    position: relative;
    top: 5px;
  }
`

const DivButton = styled.div`
  margin: 10px;

  button {
    padding: 10px;

    &:hover {
      background-color: #fff;
      cursor: pointer;
    }
  }
`

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