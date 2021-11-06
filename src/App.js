import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import PhotographerScreen from "./pages/PhotographerScreen";
import FourOneFour from "./pages/FourOneFour";

const routes = [
	{
		key: "screen-home",
		path: "/",
		component: HomeScreen,
	},
	{
		key: "screen-photographer",
		path: "/photographer-page/:id",
		component: PhotographerScreen,
	},
];

const App = () => {
	return (
		<Switch>
			{routes.map((route) => (
				<Route key={route.key} exact {...route} />
			))}
			<Redirect from="/home" to="/" />
			<Route path="*" component={FourOneFour} />
		</Switch>
	);
};

export default App;
