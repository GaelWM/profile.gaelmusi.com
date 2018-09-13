import React from "react";
import Commit from "./RepoCommits";
import RepoCommits from "./RepoCommits";
import renderer from "react-test-renderer";

test("CommitList renders properly ", () => {
  const message = "Add login form";
  const commit = renderer.create(<Commit index={1} message={message} />);

  const RepoCommit = renderer.create(<RepoCommits />);

  let tree = RepoCommit.toJSON();
  expect(tree).toMatchSnapshot();

  //console.log(tree);

  // manually trigger the callback
  //tree.children[1].props.onClick();
  //tree.props.onClick();
  // re-rendering
  // tree = RepoCommit.toJSON();
  // expect(tree).toMatchSnapshot();
});

// test("Commit renders properly ", () => {
//   const index = 1;
//   const message = "Change language to English";
//   const commit = renderer.create(<Commit index={index} message={message} />);
//   let tree = commit.toJSON();
//   expect(tree).toMatchSnapshot();
// });
