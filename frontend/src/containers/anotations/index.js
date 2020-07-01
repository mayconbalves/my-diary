import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/grid'
import NavBar from '../../components/navbar'
import Aside from '../../components/menu'
import Content from '../../components/main-container'

import FormContainer from '../home/components/Form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as DiscoveryActions from '../home/action'



class AnotationContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.getDiscoverys()
  }

  submitForm = values => {
    console.log(values, 'values')
    this.props.createDiscovery(values)
  }
  
    render() {
    return (
      <Container>
        <NavBar title='Meu diário, meus registros' />
        <Aside />
        <Content>
          
        </Content>
      </Container>
    )
  }
}

AnotationContainer.propTypes = {
  createDiscovery: PropTypes.func
}

const mapStateToProps = ({ discoveryReducer }) => ({
	response: discoveryReducer.response,
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(DiscoveryActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotationContainer)