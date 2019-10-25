import { createAxiosInstance } from '../utils/helpers'

import * as types from './types'

import { mostrarMensaje } from './layout'



export function updateInputs(path, value) {
	return (dispatch) => {
        const fn0 = (d) => d({ type: types.MODIFICAR_INPUTS, payload: { path, value } })
		fn0(dispatch)
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