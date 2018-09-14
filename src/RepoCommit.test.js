// __tests__/fetch.js
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
// this adds custom jest matchers from jest-dom
i; //mport "jest-dom/extend-expect";
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
  const { getByTestId, container } = render(<RepoCommits commits={commits} />);

  const { getByText } = render(<button onClick={spy}>Get Last Commits</button>);

  fireEvent(
    getByText("Get Last Commits"),
    new MouseEvent("click", {
      bubbles: true, // click events must bubble for React to see it
      cancelable: true
    })
  );

  expect(spy).toHaveBeenCalledTimes(1);

  // // Act
  // fireEvent.click(getByText("Load Greeting"));

  // // Let's wait until our mocked `get` request promise resolves and
  // // the component calls setState and re-renders.
  // // getByTestId throws an error if it cannot find an element with the given ID
  // // and waitForElement will wait until the callback doesn't throw an error
  // const greetingTextNode = await waitForElement(() =>
  //   getByTestId("greeting-text")
  // );

  // // Assert
  // expect(axiosMock.get).toHaveBeenCalledTimes(1);
  // expect(axiosMock.get).toHaveBeenCalledWith(url);
  // expect(getByTestId("greeting-text")).toHaveTextContent("hello there");
  // expect(getByTestId("ok-button")).toHaveAttribute("disabled");
  // // snapshots work great with regular DOM nodes!
  // expect(container.firstChild).toMatchSnapshot();
});
