import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const HomeScreen = React.lazy(() => import("./pages/HomeScreen"));
const PhotographerScreen = React.lazy(() =>
	import("./pages/PhotographerScreen")
);
const FourOneFour = React.lazy(() => import("./pages/FourOneFour"));

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
