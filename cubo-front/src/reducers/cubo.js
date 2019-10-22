import * as types from '../actions/types'
import Immutable from 'immutable'


const INITIAL_STATE = Immutable.fromJS({
    numero_casos: null,
    caso_actual: 0,
    dimension: null,
    operaciones: null,
    tipo_operacion: 'UPDATE',
    x: null, y: null, z: null, W: null,
    x1: null, y1: null, z1: null,
    x2: null, y2: null, z2: null,
    cubo: [],
    caso_deshabilitado: true,
    operacion_deshabilitada: true,
    entrada: {
        casos: []
    },
    entrada_txt: null
})

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {


        case types.MODIFICAR_INPUTS:
                state = state.setIn(`${action.payload.path}`.split('.'), Immutable.fromJS(action.payload.value))
                return state

        case types.INICIALIZAR_CUBO:

                state = state.set('cubo', INITIAL_STATE.get('cubo'))

                state = state.set('caso_actual', 1)

                state = state.setIn(['entrada', 'casos'], Immutable.fromJS([]))

                state = state
                        .set('dimension', INITIAL_STATE.get('dimension'))
                        .set('operaciones', INITIAL_STATE.get('operaciones'))

                state = state
                        .set('x', INITIAL_STATE.get('x'))
                        .set('y', INITIAL_STATE.get('y'))
                        .set('z', INITIAL_STATE.get('z'))
                        .set('W', INITIAL_STATE.get('W'))

                state = state
                        .set('x1', INITIAL_STATE.get('x1'))
                        .set('y1', INITIAL_STATE.get('y1'))
                        .set('z1', INITIAL_STATE.get('z1'))

                state = state
                        .set('x2', INITIAL_STATE.get('x2'))
                        .set('y2', INITIAL_STATE.get('y2'))
                        .set('z2', INITIAL_STATE.get('z2'))

                state = state.set('operacion_deshabilitada', INITIAL_STATE.get('operacion_deshabilitada'))  
                
                state = state.set('tipo_operacion', INITIAL_STATE.get('tipo_operacion')) 

                return state


        case types.INICIALIZAR_OPERACIONES:

                state = state
                        .set('x', INITIAL_STATE.get('x'))
                        .set('y', INITIAL_STATE.get('y'))
                        .set('z', INITIAL_STATE.get('z'))
                        .set('W', INITIAL_STATE.get('W'))

                state = state
                        .set('x1', INITIAL_STATE.get('x1'))
                        .set('y1', INITIAL_STATE.get('y1'))
                        .set('z1', INITIAL_STATE.get('z1'))

                state = state
                        .set('x2', INITIAL_STATE.get('x2'))
                        .set('y2', INITIAL_STATE.get('y2'))
                        .set('z2', INITIAL_STATE.get('z2'))

                return state



        case types.ABRIR_CASO:

                const index = (Number(state.get('caso_actual'))-1)
                state = state.set('operacion_deshabilitada', false)
                state = state.setIn(['entrada', 'casos', index, 'N'], Number(state.get('dimension')))
                state = state.setIn(['entrada', 'casos', index, 'M'], Number(state.get('operaciones')))
                state = state.setIn(['entrada', 'casos', index, 'operaciones'], Immutable.fromJS([]))

                return state


        case types.EJECUTAR_UPDATE:

                const operacion = Immutable.fromJS(action.payload)

                const casoidx = (Number(state.get('caso_actual'))-1)

                const operaciones = state.getIn(['entrada', 'casos', casoidx, 'operaciones']).push(operacion)                

                state = state.setIn(['entrada', 'casos', casoidx, 'operaciones'], operaciones)

                return state



        case types.EJECUTAR_QUERY:


                return state



        case types.ESCRIBIR_ENTRADA:

                var txt = ''

                txt += state.get('numero_casos') + '\r\n'

                state.getIn(['entrada', 'casos']).map(caso => {

                        txt += `${caso.get('N')} ${caso.get('M')}` + '\r\n'

                        caso.get('operaciones').map(linea => {

                                switch(linea.get('operacion')) {

                                        case 'UPDATE':
                                                txt += `UPDATE ${linea.get('x')} ${linea.get('y')} ${linea.get('z')} ${linea.get('W')}` + '\r\n'
                                        break
                                }
                        })
                })
                
                state = state.set('entrada_txt', txt)

                return state

        default:
            return state
    }
}