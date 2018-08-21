"use strict";

import React from "react";
import CommitList from "./RepoCommits";
import Commit from "./RepoCommits";
import renderer from "react-test-renderer";

// const testData = {
//   "0": {
//     commit: { message: "Change language to English" }
//   },
//   "1": {
//     commit: { message: "Modify the login panel" }
//   }
// };

const testData = <Commit index="1" message="Lol" />;

it("list the commits correctly", () => {
  const commitList = renderer.create(<CommitList commits={testData} />);
  expect(commitList).toMatchSnapshot();
});
