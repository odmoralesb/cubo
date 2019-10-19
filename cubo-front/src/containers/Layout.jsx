import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'




class Layout extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentWillUpdate(nextProps) {

    }

    componentDidUpdate() {
        this.props.clearMessage()
    }



	render() {

        if (this.props.message) {

            const { message } = this.props

            switch (message.get('type')) {
                case 'danger':
                    toast.error(message.get('message'), { bodyClassName: 'toastify-content toastify-danger' })
                    break
                case 'warning':
                    toast.warn(message.get('message'), { bodyClassName: 'toastify-content toastify-warning' })
                    break
                case 'success':
                    toast.success(message.get('message'), { bodyClassName: 'toastify-content toastify-success' })
                    break
                default:
                    toast.info(message.get('message'), { bodyClassName: 'toastify-content toastify-info' })
            }
        }

		return (
            <div>
                <div className="titulo">Prueba tecnica .NET + ReactJS</div>
                <div className="contenido">
                    { this.props.children }
                </div>
            </div>
		)
	}
}

function mapStateToProps(state) {
    return {
        //message: state.common.get('message'),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //clearMessage: () => dispatch(clearMessage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)