import React from "react";
import { Route } from "react-router-dom";
import ComponentsView from "./containers/ComponentsView";

// const componentsViewRoutes = (
// 	<Route path='components' component={PCComponents}>
// 		{/* <Route path='/:componentId' component={PCComponents} /> */}
// 	</Route>
// );

export default () => (
	<Route path='/components-view' component={ComponentsView}>
		{/* <Route path='/:componentId' component={PCComponents} /> */}
	</Route>
);
