/* eslint no-use-before-define: 0 */

//setup

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

//test

import React from "react";
import ReactDOM from "react-dom";
import App from "../App.jsx";
import axios from "axios";

import jest from "jest";
import { shallow } from "enzyme";

//components to test
import NotFound from "../components/NotFound/notFound.jsx";
import Home from "../components/Home/home.jsx";

describe("Testing Components : App", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
	});
});

describe("Testing Components : Home", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Home />);
	});

	it("renders without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});

	it("contains the search section", () => {
		expect(wrapper.find("#app-search").length).toEqual(1);
	});

	it("contains the results section", () => {
		expect(wrapper.find("#app-results").length).toEqual(1);
	});
});

describe("Testing Components : NotFound", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<NotFound />);
	});

	it("renders without crashing", () => {
		expect(wrapper.length).toEqual(1);
	});

	it("links back to home page", () => {
		expect(wrapper.find("NavLink").prop("to")).toEqual("/");
	});

	it("displays the right error code", () => {
		expect(wrapper.find("span#not-found-code").text()).toEqual("404");
	});
});

describe("Testing REST API", () => {
	test("gets a response to a valid request", async () => {
		expect.assertions(1);
		const api = "https://itunes.apple.com/";
		const search = "search?";
		const artistQueryPrefix = "term=";
		const albumQuery = "&entity=album";
		const artist = "adele";
		const query = `${api}${search}${artistQueryPrefix}${artist}${albumQuery}`;
		const promise = await axios.get(query);
		expect(promise.data.results.length).toBeGreaterThan(0);
	});
});
