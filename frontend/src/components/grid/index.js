import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styled'

const GridContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default GridContainer

