import 'react-native-gesture-handler';
import "react-native";
import React from "react";
import App from "../App";

import { fireEvent, render, waitFor } from "@testing-library/react-native";

jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.useFakeTimers();

it("Check for Existence of App", async () => {
  expect(App()).toBeTruthy();
})