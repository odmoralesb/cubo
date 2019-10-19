import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    Card
} from 'react-bootstrap';

import { 
    updateInputs
} from '../actions/cubo'



class Contenido extends Component {

	render() {

        const { cubo } = this.props
        
		return (
            <div> 

                <Card>
                    <Card.Body>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">T</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Introduzca el numero de casos" 
                                        aria-label="numero_casos" 
                                        aria-describedby="basic-addon1"
                                        value={cubo.get('numero_casos')||''}
                                        onChange={(e) => this.props.updateInputs('numero_casos', e.target.value) }
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button type="button" class="btn btn-primary">Aceptar</button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>


                <Card className="sep">
                    <Card.Body>
                        <div className="row">

                            <div className="col-md-2">
                                <button type="button" class="btn btn-primary" disabled>
                                    Caso actual <span class="badge badge-light">{cubo.get('caso_actual')}</span>
                                </button>
                            </div>
                            
                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">N</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dimension" 
                                        aria-label="numero_casos" 
                                        aria-describedby="basic-addon1"
                                        value={cubo.get('dimension')||''}
                                        onChange={(e) => this.props.updateInputs('dimension', e.target.value) }
                                    />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">M</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Operaciones" 
                                        aria-label="numero_casos" 
                                        aria-describedby="basic-addon1"
                                        value={cubo.get('operaciones')||''}
                                        onChange={(e) => this.props.updateInputs('operaciones', e.target.value) }
                                    />
                                </div>
                            </div>

                            <div className="col-md-2">
                                <button type="button" class="btn btn-primary">Aceptar</button>
                            </div>


                        </div>
                    </Card.Body>
                </Card>


                <Card className="sep">
                    <Card.Body>

                        <div className="row">
                            <div className="col-md-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                    <label class="form-check-label" for="exampleRadios1">
                                        UPDATE
                                    </label>
                                </div>
                            </div>  

                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">x</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>
                            
                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">y</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>

                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">z</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div> 


                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">W</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>  


                        </div>

                        <div className="sep">&nbsp;</div>

                        <div className="row sep">

                            <div className="col-md-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" checked />
                                    <label class="form-check-label" for="exampleRadios2">
                                        QUERY
                                    </label>
                                </div>
                            </div>  


                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">x1</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>
                            
                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">y1</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>

                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">z1</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>

                        </div>

                        

                        <div className="row sep">

                            <div className="col-md-2 offset-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">x2</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>


                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">y2</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>


                            <div className="col-md-2">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">z2</span>
                                    </div>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                    />
                                </div>                                
                            </div>

                            <div className="col-md-2">
                                <button type="button" class="btn btn-primary">Aceptar</button>
                            </div>


                        </div>



                    </Card.Body>
                </Card>










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
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Contenido)