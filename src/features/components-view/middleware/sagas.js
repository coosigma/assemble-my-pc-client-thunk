import { put, takeLatest, select } from "redux-saga/effects";

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

const getComponentsData = (state) => state.getIn(["allComponents", "data"]);
const getDidInvalidate = (state) =>
	state.getIn(["allComponents", "didInvalidate"]);

function* fetchCategory({ category, uri }) {
	const components = yield select(getComponentsData);
	const didInvalidate = yield select(getDidInvalidate);
	if (components.get(category) && !didInvalidate) {
		return;
	}
	let json = yield fetch(uri)
		.then(handleErrors)
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
	json = { [category]: json.components };
	yield put({ type: "RECEIVE_CATEGORY", json });
}
export default function* allComponentsWatcher() {
	yield takeLatest("REQUEST_CATEGORY", fetchCategory);
}
