import "react-native";
import React from "react";
import App from "../App";

import { fireEvent, render, waitFor } from "@testing-library/react-native";

it("Renders Message 1", async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);

  const button = getByText("Run Test 1");
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId("printed-message1")).toBeTruthy());

  expect(getByTestId("printed-message1").props.children).toBe("1");
  expect(toJSON()).toMatchSnapshot();
}),

it("Renders Message 2", async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);

  const button = getByText("Run Test 2");
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId("printed-message2")).toBeTruthy());

  expect(getByTestId("printed-message2").props.children).toBe("2");
  expect(toJSON()).toMatchSnapshot();
})

it("Renders Message 3", async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);

  const button = getByText("Run Test 3");
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId("printed-message3")).toBeTruthy());

  expect(getByTestId("printed-message3").props.children).toBe("3");
  expect(toJSON()).toMatchSnapshot();
});