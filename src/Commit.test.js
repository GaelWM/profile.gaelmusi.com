import React from "react";
import Commit from "./RepoCommits";
import renderer from "react-test-renderer";

it("renders the commits correctly", () => {
  const props = { index: "1", message: "Modify the login panel" };

  const commit = renderer.create(<Commit props={props} />);
  expect(commit).toMatchSnapshot();
});
