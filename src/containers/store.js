import { applyMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import State from "./state";

export default function generateStore() {
	const initialState = State.initial();

	return {
		...createStore(
			rootReducer,
			initialState,
			composeWithDevTools(applyMiddleware(thunkMiddleware))
		),
	};
}
