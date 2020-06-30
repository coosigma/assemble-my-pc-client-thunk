const Immutable = require("immutable");

const State = {};

State.initial = () => {
	return Immutable.fromJS({
		allComponents: {
			isFetching: false,
			didInvalidate: false,
			data: {},
		},
		currentCategory: "",
		myComponents: {},
		filter: {},
	});
};

export default State;
