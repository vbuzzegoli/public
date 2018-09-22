import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import $ from "jquery"; // never used for DOM manipulation
import "./App.css";
import store from "./store";

import Home from "./components/Home/home";
import NotFound from "./components/NotFound/notFound";

class App extends Component {
	componentDidMount() {
		// when resizing the window, re-adjust the aspect ratio of the albums' covers
		$(window).on("resize", () => {
			// force aspect ratio 1:1
			const width = $(".album-cover-wrapper").css("width");
			$(".album-cover-wrapper").css("height", width);
			$(".album-cover").css("height", width);
		});
	}

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="app">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
