import { createAxiosInstance } from '../utils/helpers'

import * as types from './types'

import { mostrarMensaje } from './layout'

export function updateInputs(path, value) {
	return (dispatch) => {
		dispatch({ 
			type: types.MODIFICAR_INPUTS, 
			payload: { 
				path, 
				value: (value == '') ? null : value 
			} 
		})
	}
}


export function inicializarCubo() {
	return (dispatch, getState) => {

		const { numero_casos} = getState().cubo.toJS()

		dispatch({ type: types.INICIALIZAR_CUBO })

		if (numero_casos < 1) { 
			dispatch(updateInputs('caso_deshabilitado', true))
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'El numero de casos debe ser mayor de 0'})
			return
		} 
		
		if (numero_casos > 50) {
			dispatch(updateInputs('caso_deshabilitado', true))
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'El numero de casos no debe ser mayor de 50'})
			return
		}
		
		dispatch(escribirEntrada())
	}
}



export function inicializarOperaciones() {
	return (dispatch, getState) => {

		const { dimension, operaciones } = getState().cubo.toJS()	

		dispatch({type: types.INICIALIZAR_OPERACIONES})

		dispatch(escribirEntrada())

		if (dimension < 1) {
			dispatch(updateInputs('operacion_deshabilitada', true))
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'La dimension debe ser mayor de 0'})
			return
		}

		if (dimension > 100) {
			dispatch(updateInputs('operacion_deshabilitada', true))
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'La dimension no debe ser mayor de 100'})
			return			
		}


		if (operaciones < 1) {
			dispatch(updateInputs('operacion_deshabilitada', true))
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'Las operaciones deben ser mayor de 0'})
			return
		}

		if (operaciones > 1000) {
			dispatch(updateInputs('operacion_deshabilitada', true))
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'Las operaciones no deben ser mayor de 1000'})
			return			
		}

		dispatch(abrirCaso())


	}
}


export function abrirCaso() {
	return (dispatch) => {
		dispatch({ type: types.ABRIR_CASO })
		dispatch(escribirEntrada())
	}
}





export function ejecutarUpdate() {
	return (dispatch, getState) => {

		const { x, y, z, W } = getState().cubo.toJS()


		if (x < 1) {
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'x debe ser mayor de 0'})
			return
		}


		if (y < 1) {
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'y debe ser mayor de 0'})
			return
		}

		if (z < 1) {
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'z debe ser mayor de 0'})
			return
		}

		if (W == null) {
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'W debe ser un valor numerico'})
			return
		}


		if (W < Math.pow(-10, 9)) {
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'W debe ser mayor que -1.000.000.000'})
			return
		}


		if (W > Math.pow(10, 9)) {
			mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'W debe ser menor que 1.000.000.000'})
			return
		}


		dispatch({ 
			type: types.EJECUTAR_OPERACION, 
			payload: {
				operacion: 'UPDATE',
				x, y, z, W
			} 
		})

		dispatch(escribirEntrada())


	}
}



export function ejecutarQuery() {
	
		return (dispatch, getState) => {
	
			const { x1, y1, z1, x2, y2, z2 } = getState().cubo.toJS()

			if (x1 < 1) {
				mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'x1 debe ser mayor de 0'})
				return
			}
	
			if (y1 < 1) {
				mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'y1 debe ser mayor de 0'})
				return
			}

			if (z1 < 1) {
				mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'z1 debe ser mayor de 0'})
				return
			}


			if (x2 < 1) {
				mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'x2 debe ser mayor de 0'})
				return
			}
	
			if (y2 < 1) {
				mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'y2 debe ser mayor de 0'})
				return
			}

			if (z2 < 1) {
				mostrarMensaje(dispatch, {tipo: 'danger', descripcion: 'z2 debe ser mayor de 0'})
				return
			}


			dispatch({ 
				type: types.EJECUTAR_OPERACION, 
				payload: {
					operacion: 'QUERY',
					x1, y1, z1, x2, y2, z2
				}
			})
	
			dispatch(escribirEntrada())
	
		}
	}


export function escribirEntrada() {
	return (dispatch) => {
        const fn0 = (d) => d({ type: types.ESCRIBIR_ENTRADA })
		fn0(dispatch)
	}
}