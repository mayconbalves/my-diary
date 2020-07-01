import axios from 'axios'

export const CREATE_DISCOVERY = 'CREATE_DISCOVERY'
export const CREATE_DISCOVERY_ERROR = 'CREATE_DISCOVERY_ERROR'

const todoListSuccess = (data) => {
	return {
		type: CREATE_DISCOVERY,
		payload: data
	}
}

const todoListError = (error) => ({
	type: CREATE_DISCOVERY_ERROR,
	payload: error
})
export const createDiscovery = (values) => (dispatch) => {
	
	axios
		.post('http://localhost:3001/discoverys/create', { ...values })
		.then((response) => dispatch(todoListSuccess(response.data, dispatch)))
		.catch((error) => dispatch(todoListError(error)))
}

export const getDiscoverys = () => dispatch => {
	axios
		.get('http://localhost:3001/discoverys/list')
}