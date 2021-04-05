import React from "react";
import ReactDOM from "react-dom";
import Button from "../button";
import { render,cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup);

test("should render", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
});

test("renser button correctly", () => {
    const { getByTestId } = render(<Button label="please click me!" />);
    expect(getByTestId("button")).toHaveTextContent("please click me!");
});

test("renser button correctly", () => {
    const { getByTestId } = render(<Button label="Click!" />);
    expect(getByTestId("button")).toHaveTextContent("Click!");
});

test("matches snapshot", () => {
    const tree = renderer.create(<Button label="Click!" />).toJSON();
    expect(tree).toMatchSnapshot();
});
