import axios from 'axios'

export const GET_DISCOVERY = 'GET_DISCOVERY'
export const GET_DISCOVERY_ERROR = 'GET_DISCOVERY_ERROR'

const getDiscoverySuccess = (data) => ({
	type: GET_DISCOVERY,
	payload: data
})

const getDiscoveryError = (error) => ({
	type: GET_DISCOVERY_ERROR,
	payload: error
})

export const getDiscoverys = () => dispatch => {
	axios
		.get('http://localhost:3001/discoverys/list')
			.then(resp => dispatch(getDiscoverySuccess(resp)))
			.catch(err => dispatch(getDiscoveryError(err)))
}