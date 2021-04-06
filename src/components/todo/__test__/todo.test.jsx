import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import TODO from "../todo";

test("should Render", () => {
    const { getByText, getByLabelText } = render(<TODO />);
    getByText("TODOS");
    getByLabelText("What needs to be done?");
    getByText("Add #1");
});

test("allow user to add in list", () => {
    const { getByText, getByLabelText } = render(<TODO />);

    const input = getByLabelText("What needs to be done?");
    const button = getByText("Add #1");

    fireEvent.change(input, { target: { value: "Learn JEST" } });
    fireEvent.click(button);

    getByText("Learn JEST");
    getByText("Add #2");
});
