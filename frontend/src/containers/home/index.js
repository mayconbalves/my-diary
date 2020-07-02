import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/grid'
import NavBar from '../../components/navbar'
import Aside from '../../components/menu'
import Content from '../../components/main-container'

import FormContainer from './components/Form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as DiscoveryActions from './action'



class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  submitForm = values => {
    this.props.createDiscovery(values)
  }
  
    render() {
    return (
      <Container>
        <NavBar title='Meu diário, meus registros' />
        <Aside />
        <Content>
          <FormContainer handleSubmitForm={this.submitForm} />
        </Content>
      </Container>
    )
  }
}

HomeContainer.propTypes = {
  createDiscovery: PropTypes.func
}

const mapStateToProps = ({ discoveryReducer }) => ({
	response: discoveryReducer.response,
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(DiscoveryActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)