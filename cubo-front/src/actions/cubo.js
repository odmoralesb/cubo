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


export function abrirCaso() {
	return (dispatch) => {

		const fn0 = (d) => d({ type: types.ABRIR_CASO })
		const fn1 = (d) => d({ type: types.ESCRIBIR_ENTRADA })		

		fn0(dispatch)
		fn1(dispatch)

	}
}



export function ejecutarUpdate() {
	return (dispatch, getState) => {


		const { x, y, z, W } = getState().cubo.toJS()	

		const fn0 = (d) => d({ 
			type: types.EJECUTAR_OPERACION, 
			payload: {
				operacion: 'UPDATE',
				x, y, z, W
			} 
		})
		
		const fn1 = (d) => d({ type: types.ESCRIBIR_ENTRADA })		
		
		fn0(dispatch)
		fn1(dispatch)
	}
}


export function ejecutarQuery() {

	return (dispatch, getState) => {

		const { x1, y1, z1, x2, y2, z2 } = getState().cubo.toJS()

		const fn0 = (d) => d({ 
			type: types.EJECUTAR_OPERACION, 
			payload: {
				operacion: 'QUERY',
				x1, y1, z1, x2, y2, z2
			} 
		})

		const fn1 = (d) => d({ type: types.ESCRIBIR_ENTRADA })		

		fn0(dispatch)
		fn1(dispatch)

	}
}





export function escribirEntrada() {
	return (dispatch) => {

        const fn0 = (d) => d({ type: types.ESCRIBIR_ENTRADA })
		fn0(dispatch)



	}
}