import React from "react";
import Commit from "./Commit";
import renderer from "react-test-renderer";

test("Commit renders properly ", () => {
  const index = 1;
  const message = "Change language to English";
  const commit = renderer.create(<Commit index={index} message={message} />);
  let tree = commit.toJSON();
  expect(tree).toMatchSnapshot();
});
