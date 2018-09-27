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
import { get } from "axios";
import RepoCommits from "./RepoCommits"; // see the tests for a full implementation
import renderer from "react-test-renderer";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("Fetch makes an API call and displays the commits when Get Last Commits is clicked", async () => {
  //ini

  const commits = [
    {
      commit: {
        key: 0,
        message: "Change the website backgroung image"
      }
    },
    {
      commit: {
        key: 1,
        message: "Add Login to website"
      }
    }
  ];

  axiosMock.get.mockImplementation(() =>
    Promise.resolve({
      data: commits
    })
  );

  const component = render(<RepoCommits />);
  const btnGetCommits = component.getByText("Get Last Commits");
  btnGetCommits.click();
  const repocommits = await component;

  const textBtnGetCommits = btnGetCommits.textContent;

  expect(textBtnGetCommits).toBe("Get Last Commits");
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenLastCalledWith(
    "https://api.github.com/repos/gaelwm/profile.gaelmusi.com/commits"
  );

  expect(repocommits).toEqual(component);
  expect(component).toMatchSnapshot();
});
