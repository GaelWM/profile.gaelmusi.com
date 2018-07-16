import React, { Component } from 'react';
import axios from 'axios'

class RepoCommits extends Component {
    constructor(){
        super();
        this.state = {
            commits: []
        };
        this.handleGetRepoCommits = this.handleGetRepoCommits.bind(this);
    }

    handleGetRepoCommits (i)
    {
        axios.get('https://api.github.com/repos/gaelwm/profile.gaelmusi.com/commits')
            .then(response => this.setState({commits: response.data }));
    }


    render(){

        const mycommits = this.state.commits.map(function(commit, i) {
            return <li key={i} className="list-group-item list-group-item-action">{commit.commit.message}</li>
        });

        return(
            <div className="card-panel">
                <ol className="list-group">
                    {mycommits}
                </ol>
                <button className="btn btn-primary" onClick={this.handleGetRepoCommits}>Get Last Commits</button>
            </div>
        )
    }
}

export default RepoCommits;
