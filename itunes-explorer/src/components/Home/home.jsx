import "./home.css";
import React from "react";

import Search from "../Search/search";
import Results from "../Results/results";

//Main Route
const Home = () => {
	return (
		<div>
			<Search className="row" id="app-search" />
			<Results className="row" id="app-results" />
		</div>
	);
};

export default Home;
