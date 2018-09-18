// __tests__/fetch.js
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
// this adds custom jest matchers from jest-dom
//mport "jest-dom/extend-expect";
import axiosMock from "axios"; // the mock lives in a __mocks__ directory
import RepoCommits from "./RepoCommits"; // see the tests for a full implementation

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("Fetch makes an API call and displays the commits when Get Last Commits is clicked", async () => {
  //ini
  const commits = {
    "0": { index: "1", message: "Change color of a main div" },
    "1": { index: "1", message: "Change file transfer process to sftp" }
  };
  // Arrange
  //axiosMock.get.mockResolvedValueOnce({ commits });
  //const url = "https://api.github.com/repos/gaelwm/profile.gaelmusi.com/commits";

  const spy = jest.fn();
  //const url =
  //"https://api.github.com/repos/gaelwm/profile.gaelmusi.com/commits";
  //const { getByTestId, container } = render(<RepoCommits commits={commits} />);

  const { getByText, getByTestId } = render(<RepoCommits />);

  fireEvent(
    getByText("Get Last Commits"),
    new MouseEvent("click", {
      bubbles: true, // click events must bubble for React to see it
      cancelable: true
    })
  );

  //await waitForElement(() => getByTestId("testRepoCommit"));

  expect(spy).toHaveBeenCalledTimes(1);
  // expect(axiosMock.get).toHaveBeenCalledWith(url);
});
