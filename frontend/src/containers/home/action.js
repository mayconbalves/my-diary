import axios from 'axios'

export const CREATE_DISCOVERY = 'CREATE_DISCOVERY'
export const CREATE_DISCOVERY_ERROR = 'CREATE_DISCOVERY_ERROR'

const createDiscoverySuccess = (data) => ({
	type: CREATE_DISCOVERY,
	payload: data
})

const createDiscoveryError = (error) => ({
	type: CREATE_DISCOVERY_ERROR,
	payload: error
})
export const createDiscovery = (values) => (dispatch) => {
	
	axios
		.post('http://localhost:3001/discoverys/create', { ...values })
		.then((response) => dispatch(createDiscoverySuccess(response.data, dispatch)))
		.catch((error) => dispatch(createDiscoveryError(error)))
}