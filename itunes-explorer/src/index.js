/* eslint "react/jsx-filename-extension": ["warn", { extensions: [".js",".jsx"] }] */
/* eslint "no-unused-vars": ["off",{ vars: "all", args: "after-used", ignoreRestSiblings: false }] */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();


