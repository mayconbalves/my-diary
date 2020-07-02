import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/grid'
import NavBar from '../../components/navbar'
import Aside from '../../components/menu'
import Content from '../../components/main-container'

import Card from './components/Card'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as getDiscoveryActions from './action'



class AnotationContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.getDiscoverys()
  }
  render() {
    const { response } = this.props
    const discoverys = response || []
    return (
      <Container>
        <NavBar title='Meu diário, meus registros' />
        <Aside />
        <Content>
          {
            discoverys.map(discovery => (
              <Card discovery={discovery} key={discovery._id} />
            ))
          }
        </Content>
      </Container>
    )
  }
}

AnotationContainer.propTypes = {
  getDiscoverys: PropTypes.func
}

const mapStateToProps = ({ getDiscoveryReducer }) => ({
	response: getDiscoveryReducer.response,
})

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(getDiscoveryActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnotationContainer)