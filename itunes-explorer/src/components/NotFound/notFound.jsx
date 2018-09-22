import "./notFound.css";
import React from "react";
import { NavLink } from "react-router-dom";

// 404 Not Found page for unknown Routes
const NotFound = () => {
	return (
		<div id="not-found-wrapper">
			<span id="not-found-code">404</span>
			<br />
			<span id="not-found-info">
				The page you requested does not exist
			</span>
			<br />
			<div id="home">
				<NavLink to="/">Return to Home</NavLink>
			</div>
		</div>
	);
};

export default NotFound;
