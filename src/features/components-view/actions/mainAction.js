export const domain = "http://localhost:9000";

export function requestCategory(category) {
	const uri = domain + "/components/" + category;
	return { type: "REQUEST_CATEGORY", category, uri };
}

export function receiveCategory(json) {
	return { type: "RECEIVE_CATEGORY", json };
}

function fetchCategory(category) {
	return async (dispatch) => {
		dispatch(requestCategory(category));
		const uri = domain + "/components/" + category;
		const response = await fetch(uri);
		let json = await response.json();
		json = { [category]: json.components };
		return dispatch(receiveCategory(json));
	};
}

function shouldFetchCategory(state, category) {
	const components = state.getIn(["allComponents", "data", category]);
	const isFetching = state.getIn(["allComponents", "isFetching"]);
	const didInvalidate = state.getIn(["allComponents", "didInvalidate"]);
	if (!components) {
		return true;
	} else if (isFetching) {
		return false;
	} else {
		return didInvalidate;
	}
}

export function fetchCategoryIfNeeded(category) {
	return (dispatch, getState) => {
		if (shouldFetchCategory(getState(), category)) {
			return dispatch(fetchCategory(category));
		}
	};
}

export function addComponent(id) {
	return { type: "ADD_COMPONENT", id };
}

export function removeComponent(id) {
	return { type: "REMOVE_COMPONENT", id };
}

export function setCurrentCategory(value) {
	return { type: "SET_CURRENT_CATEGORY", value };
}

export const ACTIONS = {
	REQUEST_CATEGORY: requestCategory,
	RECEIVE_CATEGORY: receiveCategory,
	ADD_COMPONENT: addComponent,
	REMOVE_COMPONENT: removeComponent,
	SET_CURRENT_CATEGORY: setCurrentCategory,
	FETCH_CATEGORY_IF_NEEDED: fetchCategoryIfNeeded,
};
