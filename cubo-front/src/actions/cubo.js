import { createAxiosInstance } from '../utils/helpers'

import * as types from './types'

export function updateInputs(path, value) {

	return (dispatch) => {
        const fn0 = (d) => d({ type: types.MODIFICAR_INPUTS, payload: { path, value } })
		fn0(dispatch)
	}


}