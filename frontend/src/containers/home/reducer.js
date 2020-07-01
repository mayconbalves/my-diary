import {
	CREATE_DISCOVERY,
	CREATE_DISCOVERY_ERROR
} from './action'

const initialState = {
	response: '',
	error: null
}

export default function todo(state = initialState, action) {
	switch (action.type) {
		case CREATE_DISCOVERY:
			return {
				...state,
				response: action.payload,
				error: null
			}
		case CREATE_DISCOVERY_ERROR:
			return {
				response: [],
				error: action.payload
			}
		default:
			return state
	}
}