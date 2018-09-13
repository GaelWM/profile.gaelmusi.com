import React from "react";
import CommitList from "./CommitList";
import Commit from "./Commit";
import renderer from "react-test-renderer";

test("CommitList renders properly ", () => {
  const message = "Add login form";
  const commit = <Commit key="1" message={message} />;
  const commits = [];
  commits.push(commit);

  const component = renderer.create(<CommitList commits={commits} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
