import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
//import App from './App';
import RepoCommits from "./RepoCommits";
import ContactCV from "./ContactCV";

ReactDOM.render(<RepoCommits />, document.getElementById("div-commits"));
ReactDOM.render(<ContactCV />, document.getElementById("ask-for-cv"));

// ReactDOM.render(
// <App />,
// document.getElementById('root')
// );
