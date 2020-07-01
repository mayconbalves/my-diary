import React from 'react'
import PropTypes from 'prop-types'
import { MainContent } from './styled'

const MainContainer = ({ children }) => {
  return (
    <MainContent>
      {children}
    </MainContent>
  )
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContainer