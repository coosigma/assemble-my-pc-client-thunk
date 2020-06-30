import { combineReducers } from "redux-immutable";
import State from "../../../containers/state";
import { merge } from "immutable";
const Immutable = require("immutable");

const initialState = State.initial();

function createReducer(initialState, handlers) {
	return function reducer(state = initialState, action) {
		if (handlers.hasOwnProperty(action.type)) {
			return handlers[action.type](state, action);
		} else {
			return state;
		}
	};
}

function requestCategory(allComponentsState, action) {
	return merge(allComponentsState, {
		isFetching: true,
		didInvalidate: false,
	});
}

function receiveCategory(allComponentsState, action) {
	const receivedComponents = Immutable.fromJS(action.json);
	return merge(allComponentsState, {
		isFetching: false,
		didInvalidate: false,
		data: merge(allComponentsState.get("data"), receivedComponents),
	});
}

const allComponentsReducer = createReducer(initialState.get("allComponents"), {
	REQUEST_CATEGORY: requestCategory,
	RECEIVE_CATEGORY: receiveCategory,
});

function setCurrentCategory(currentCategoryState, action) {
	return action.value;
}

const currentCategoryReducer = createReducer(
	initialState.get("currentCategory"),
	{
		SET_CURRENT_CATEGORY: setCurrentCategory,
	}
);

const myComponentsReducer = createReducer(initialState.get("myComponents"), {});

const filterReducer = createReducer(initialState.get("filter"), {});

export default combineReducers({
	allComponents: allComponentsReducer,
	currentCategory: currentCategoryReducer,
	myComponents: myComponentsReducer,
	filter: filterReducer,
});
