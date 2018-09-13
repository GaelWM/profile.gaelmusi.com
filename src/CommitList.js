import React, { Component } from "react";

const CommitList = props => {
  return <ol className="list-group">{props.commits}</ol>;
};

export default CommitList;
