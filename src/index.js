import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./scss/main.scss";

import App from "./App";
import LoadingScreen from "./pages/LoadingScreen";

ReactDOM.render(
	<React.StrictMode>
		<React.Suspense fallback={<LoadingScreen />}>
			<Router>
				<App />
			</Router>
		</React.Suspense>
	</React.StrictMode>,
	document.getElementById("root")
);
