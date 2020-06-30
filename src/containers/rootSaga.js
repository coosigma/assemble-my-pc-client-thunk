import { all, fork } from "redux-saga/effects";
import componentsViewSagas from "../features/components-view/middleware/sagas";

export default function* () {
	yield all([fork(componentsViewSagas)]);
}
