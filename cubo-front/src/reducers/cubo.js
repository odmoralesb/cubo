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
    x2: null, y2: null, z2: null
})

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {


        case types.MODIFICAR_INPUTS:
            state = state.setIn(`${action.payload.path}`.split('.'), Immutable.fromJS(action.payload.value))
            return state


        default:
            return state
    }
}