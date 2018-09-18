import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
//import App from './App';
import RepoCommits from "./RepoCommits";
import Login from "./auth/Login";

ReactDOM.render(<RepoCommits />, document.getElementById("div-commits"));
ReactDOM.render(<Login />, document.getElementById("div-login"));

// ReactDOM.render(
// <App />,
// document.getElementById('root')
// );
