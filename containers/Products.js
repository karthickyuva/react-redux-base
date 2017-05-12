import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dataweaveAction from "../actions/products";

class Home extends React.Component {

	constructor() {
		super();
		this.state = {
			data: ""
		};
	}

	componentWillMount() {
		const { products, actions } = this.props;

		let doesExist = false;

		if (!doesExist) {
			actions.fetchProducts();
		}
	}

	render() {
		return (
			<div>
				<p>This is my main page</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	};
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(dataweaveAction, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
