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
    registro: {
        N: null,
        items: []        
    },
    caso_deshabilitado: true,
    caso_abierto: true,
    operacion_deshabilitada: true,
    entrada: {
        casos: []
    },
    entrada_txt: null,
    salida_txt: ''
})



export default function (state = INITIAL_STATE, action) {

    let index, txt, casos

    switch (action.type) {


        case types.MODIFICAR_INPUTS:
            state = state.setIn(`${action.payload.path}`.split('.'), Immutable.fromJS(action.payload.value))
            return state

        case types.INICIALIZAR_CUBO:

            state = state.set('caso_deshabilitado', false)

            state = state.set('caso_abierto', false)
            
            state = state.set('caso_actual', 1)

            state = state.set('payload', INITIAL_STATE.get('registro'))

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

            state = state.set('entrada_txt', INITIAL_STATE.get('entrada_txt'))

            state = state.set('salida_txt', INITIAL_STATE.get('salida_txt'))

            return state


        case types.INICIALIZAR_OPERACIONES:


            casos = state.getIn(['entrada', 'casos']).toJS()
            casos = casos.splice(0, state.get('caso_actual'))
            state = state.setIn(['entrada', 'casos'], Immutable.fromJS(casos))

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

            index = (Number(state.get('caso_actual'))-1)
            state = state.set('operacion_deshabilitada', false)
            state = state.setIn(['entrada', 'casos', index, 'N'], Number(state.get('dimension')))
            state = state.setIn(['entrada', 'casos', index, 'M'], Number(state.get('operaciones')))
            state = state.setIn(['entrada', 'casos', index, 'operaciones'], Immutable.fromJS([]))

            state = state.setIn(['registro', 'N'], state.get('dimension'))
            state = state.setIn(['registro', 'items'], Immutable.fromJS([]))
            state = state.set('caso_abierto', true)

            return state


        case types.EJECUTAR_OPERACION:

            index = (Number(state.get('caso_actual'))-1)

            const operacion = Immutable.fromJS(action.payload.entrada)            

            const operaciones = state.getIn(['entrada', 'casos', index, 'operaciones']).push(operacion)                

            state = state.setIn(['entrada', 'casos', index, 'operaciones'], operaciones)

            state = state.set('registro', Immutable.fromJS(action.payload.registro))

            const operaciones_max = state.getIn(['entrada', 'casos', index, 'M'])

            const operaciones_cant = state.getIn(['entrada', 'casos', index, 'operaciones']).count()

            if (operaciones_cant >= operaciones_max) {

                state = state.set('caso_actual', state.get('caso_actual') + 1)


                state = state
                        .set('dimension', INITIAL_STATE.get('dimension'))
                        .set('operaciones', INITIAL_STATE.get('operaciones'))


                state = state.set('caso_abierto', false)

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
                



            }


            return state



        case types.ESCRIBIR_ENTRADA:

            txt = ''

            txt += state.get('numero_casos') + '\r\n'

            state.getIn(['entrada', 'casos']).map(caso => {

                txt += `${caso.get('N')} ${caso.get('M')}` + '\r\n'

                caso.get('operaciones').map(linea => {

                    switch(linea.get('operacion')) {

                        case 'UPDATE':
                                txt += `UPDATE ${linea.get('x')} ${linea.get('y')} ${linea.get('z')} ${linea.get('W')}` + '\r\n'
                        break

                        case 'QUERY':
                                txt += `QUERY ${linea.get('x1')} ${linea.get('y1')} ${linea.get('z1')} ${linea.get('x2')} ${linea.get('y2')} ${linea.get('z2')}` + '\r\n'
                        break
                    }
                })
            })
            
            state = state.set('entrada_txt', txt)

            return state


        case types.ESCRIBIR_SALIDA:

            txt = state.get('salida_txt')

            txt += action.payload.salida + '\r\n'
            
            state = state.set('salida_txt', txt)

            return state


        default:
            return state



    }
}