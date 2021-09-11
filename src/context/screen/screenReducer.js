import { CHANGE_SCREEN } from "../todo/type";

//const handlers = {
//	[CHANGE_SCREEN]: (state, payload) => payload,
//	DEFAULT: state => state
//}

//export const screenReducer = (state, action) => {
//	const handler = handlers[action.type] || handlers.DEFAULT
//	return handler(state, action.payload)
//}

//import { CHANGE_SCREEN } from '../types'

const handlers = {
	[CHANGE_SCREEN]: (state, payload) => payload,
	DEFAULT: state => state
}

export const screenReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT
	return handler(state, action.payload)
}
