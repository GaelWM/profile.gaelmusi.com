import React, { Component } from "react";
import Commit from "./Commit";
import CommitList from "./CommitList";
import axios from "axios";

class RepoCommits extends Component {
  constructor() {
    super();
    this.state = {
      commits: []
    };
    this.handleGetRepoCommits = this.handleGetRepoCommits.bind(this);
  }

  handleGetRepoCommits() {
    axios
      .get("https://api.github.com/repos/gaelwm/profile.gaelmusi.com/commits")
      .then(response => this.setState({ commits: response.data }));
  }

  render() {
    const mycommits = this.state.commits.map(function(commit, i) {
      return <Commit index={i} message={commit.commit.message} />;
    });

    return (
      <div className="card-panel">
        <CommitList commits={mycommits} />
        <button className="btn btn-primary" onClick={this.handleGetRepoCommits}>
          Get Last Commits
        </button>
      </div>
    );
  }
}

export default RepoCommits;
