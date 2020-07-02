import {
	GET_DISCOVERY,
	GET_DISCOVERY_ERROR
} from './action'

const initialState = {
	response: '',
	error: null
}

export default function getDiscovery(state = initialState, action) {
	switch (action.type) {
		case GET_DISCOVERY:
			return {
				...state,
				response: action.payload.data,
				error: null
			}
		case GET_DISCOVERY_ERROR:
			return {
				response: [],
				error: action.payload
			}
		default:
			return state
	}
}