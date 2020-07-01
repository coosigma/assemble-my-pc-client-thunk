import React from "react";
import { Route, Switch } from "react-router-dom";
import ComponentsView from "./containers/ComponentsView";
import PCComponent from "./containers/PCComponent";

// const componentsViewRoutes = (
// 	<Route path='components' component={PCComponents}>
// 		{/* <Route path='/:componentId' component={PCComponents} /> */}
// 	</Route>
// );

export default () => (
	<Switch>
		<Route exact path='/components-view' component={ComponentsView} />
		<Route path='/components-view/:componentId' component={PCComponent} />
	</Switch>
);
