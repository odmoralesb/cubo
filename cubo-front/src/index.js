import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { ToastContainer } from 'react-toastify'

//import reducers from './reducers'
import history from './utils/history'
import store from './utils/store'

//import './css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom-toastify.css'
import './css/layout.css'



import routes from './routes'

window.root = window.document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history} >
                { routes }
            </Router>
            <ToastContainer toastClassName="toastify" />
        </div>
    </Provider>,
    window.root
)
