import * as actionTypes from "../constants/ActionTypes";
import { apiClient } from "../apiClient";

export function receiveProducts(data) {
	return {
		type: actionTypes.RECEIVE_PRODUCTS,
		data
	};
}

export function fetchProducts() {
	return (dispatch) => {

		dispatch({
			type: actionTypes.REQUEST_PRODUCTS
		});
		return apiClient.get("/posts")
			.then((response) => response.data)
			.then((data) => dispatch(receiveProducts(data)))
			.then((data) => data)
			.catch((error) => {
				if (error.status >= 400) {
					throw new Error("Bad response from server");
				}
			});

	};
}
