import { applyMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
// import createSagaMiddleware from "redux-saga";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import State from "./state";

export default function generateStore() {
	const initialState = State.initial();
	// const sagaMiddleware = createSagaMiddleware();

	return {
		...createStore(
			rootReducer,
			initialState,
			composeWithDevTools(applyMiddleware(thunkMiddleware))
			// composeWithDevTools(applyMiddleware(sagaMiddleware))
		),
		// runSaga: sagaMiddleware.run,
	};
}
