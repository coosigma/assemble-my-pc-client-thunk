export const domain = "http://localhost:9000";

export function requestCategory(category) {
	const uri = domain + "/components/" + category;
	return { type: "REQUEST_CATEGORY", category, uri };
}

export function receiveCategory(json) {
	return { type: "RECEIVE_CATEGORY", json };
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
};
