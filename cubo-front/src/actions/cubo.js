import { createAxiosInstance } from '../utils/helpers'

import * as types from './types'

export function updateInputs(path, value) {
	return (dispatch) => {
        const fn0 = (d) => d({ type: types.MODIFICAR_INPUTS, payload: { path, value } })
		fn0(dispatch)
	}
}


export function inicializarCubo() {
	return (dispatch) => {
        const fn0 = (d) => d({ type: types.INICIALIZAR_CUBO })
		fn0(dispatch)
	}
}


export function inicializarOperaciones() {
	return (dispatch) => {
        const fn0 = (d) => d({ type: types.INICIALIZAR_OPERACIONES })
		fn0(dispatch)
	}
}