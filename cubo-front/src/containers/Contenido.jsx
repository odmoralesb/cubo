import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
    Card
} from 'react-bootstrap';

import { 
    updateInputs,
    inicializarCubo,
    inicializarOperaciones,
    ejecutarUpdate,
    ejecutarQuery
} from '../actions/cubo'



class Contenido extends Component {




	render() {

        const { cubo } = this.props
        
		return (
            <div> 

               <div className="row">

                   <div className="col-md-6">

                        <Card>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">T</span>
                                            </div>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Introduzca el numero de casos" 
                                                value={cubo.get('numero_casos')||''}
                                                onChange={(e) => this.props.updateInputs('numero_casos', e.target.value) }
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <button 
                                            type="button" 
                                            className="btn btn-primary font-btn" 
                                            style={{width:'100%'}}
                                            onClick={() => this.props.inicializarCubo() }
                                        >
                                                Aceptar
                                        </button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="sep">
                            <Card.Body>
                                <div className="row">
                                    
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">N</span>
                                            </div>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Dimension" 
                                                value={cubo.get('dimension')||''}
                                                onChange={(e) => this.props.updateInputs('dimension', e.target.value) }
                                                disabled={cubo.get('caso_deshabilitado')||cubo.get('caso_abierto')}                                        
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">M</span>
                                            </div>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Operaciones" 
                                                value={cubo.get('operaciones')||''}
                                                onChange={(e) => this.props.updateInputs('operaciones', e.target.value) }
                                                disabled={cubo.get('caso_deshabilitado')||cubo.get('caso_abierto')}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <button 
                                            type="button" 
                                            className="btn btn-primary font-btn" 
                                            style={{width:'100%'}} disabled={cubo.get('caso_deshabilitado')} 
                                            onClick={() => this.props.inicializarOperaciones() }
                                        >
                                            Caso&nbsp;&nbsp;
                                            <span className="badge badge-light">{cubo.get('caso_actual')}</span>
                                        </button>
                                    </div>


                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="sep">
                            <Card.Body>

                                <div className="row sep">

                                    <div className="col-md-2">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                id="op_update" 
                                                type="radio" 
                                                checked={cubo.get('tipo_operacion')==='UPDATE'} 
                                                onClick={ () => this.props.updateInputs('tipo_operacion', 'UPDATE') }
                                                disabled={cubo.get('operacion_deshabilitada')}
                                            />
                                            <label className="form-check-label" htmlFor="op_update">
                                                UPDATE
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-md-2">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="radio"
                                                id="op_query" 
                                                type="radio" 
                                                checked={cubo.get('tipo_operacion')==='QUERY'} 
                                                onClick={ () => this.props.updateInputs('tipo_operacion', 'QUERY') } 
                                                disabled={cubo.get('operacion_deshabilitada')}
                                            />
                                            <label className="form-check-label" htmlFor="op_query">
                                                QUERY
                                            </label>
                                        </div>
                                    </div>


                                </div>

                                {(cubo.get('tipo_operacion') == 'UPDATE') && (<Fragment>

                                    <div className="row sep">

                                        <div className="col-md-10">

                                            <div className="row">

                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">x</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('x')||''}
                                                            onChange={(e) => this.props.updateInputs('x', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div>
                                                
                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">y</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('y')||''}
                                                            onChange={(e) => this.props.updateInputs('y', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">z</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('z')||''}
                                                            onChange={(e) => this.props.updateInputs('z', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div> 

                                            </div>


                                        </div>


                                    </div>

                                    <div className="row sep">

                                        <div className="col-md-10">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">W</span>
                                                </div>
                                                <input 
                                                    type="number" 
                                                    className="form-control" 
                                                    value={cubo.get('W')||''}
                                                    onChange={(e) => this.props.updateInputs('W', e.target.value) }
                                                    disabled={cubo.get('operacion_deshabilitada')}
                                                />
                                            </div>                                
                                        </div>

                                        
                                        <div className="col-md-2">
                                            <button 
                                                type="button" 
                                                className="btn btn-primary font-btn" 
                                                style={{width:'100%'}} 
                                                disabled={cubo.get('operacion_deshabilitada')}
                                                onClick = { () => this.props.ejecutarUpdate() }
                                            >
                                                UPDATE
                                            </button>
                                        </div> 

                                    </div>
                                        
                                    </Fragment>)}




                                {(cubo.get('tipo_operacion') == 'QUERY') && (<Fragment>


                                    <div className="row sep">

                                        <div className="col-md-10">

                                            <div className="row">

                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">x1</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('x1')||''}
                                                            onChange={(e) => this.props.updateInputs('x1', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">y1</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('y1')||''}
                                                            onChange={(e) => this.props.updateInputs('y1', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">z1</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('z1')||''}
                                                            onChange={(e) => this.props.updateInputs('z1', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div>

                                            </div>

                                        </div>                               


                                    </div>



                                    <div className="row sep">


                                        <div className="col-md-10">

                                            <div className="row">

                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">x2</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('x2')||''}
                                                            onChange={(e) => this.props.updateInputs('x2', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div>
                                                
                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">y2</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('y2')||''}
                                                            onChange={(e) => this.props.updateInputs('y2', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div>

                                                <div className="col-md-4">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">z2</span>
                                                        </div>
                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={cubo.get('z2')||''}
                                                            onChange={(e) => this.props.updateInputs('z2', e.target.value) }
                                                            disabled={cubo.get('operacion_deshabilitada')}
                                                        />
                                                    </div>                                
                                                </div>

                                            </div>

                                        </div>

                                        <div className="col-md-2">
                                            <button 
                                                type="button" 
                                                className="btn btn-primary font-btn" 
                                                style={{width:'100%'}} 
                                                disabled={cubo.get('operacion_deshabilitada')}
                                                onClick = { () => this.props.ejecutarQuery() }
                                            >
                                                QUERY
                                            </button>
                                        </div>                                

                                    </div>

                                </Fragment>)}

                            </Card.Body>
                        </Card>

                   </div>


                   <div className="col-md-6">

                        <Card>
                            <Card.Header>Entrada</Card.Header>
                            <Card.Body>
                                <textarea rows={12} style={{width:'100%'}} value={ cubo.get('entrada_txt') || '' } readOnly />
                            </Card.Body>
                        </Card>    

                   </div>                   
                   
                </div> 

                <div className="row sep">
                    <div className="col-md-12">
                        <Card>
                            <Card.Header>Salida</Card.Header>
                            <Card.Body>
                                <textarea rows={4} style={{width:'100%'}} value={ cubo.get('salida_txt') || '' } readOnly  />
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            
            
            </div>
		)
	}
}

function mapStateToProps(state) {
    return {
        cubo: state.cubo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateInputs: (path, value) => dispatch(updateInputs(path, value)),
        inicializarCubo: () => dispatch(inicializarCubo()),
        inicializarOperaciones: () => dispatch(inicializarOperaciones()),
        ejecutarUpdate: () => dispatch(ejecutarUpdate()),
        ejecutarQuery: () => dispatch(ejecutarQuery())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Contenido)