import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup , fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Input from "../input";
import Button from "../../button/button";

afterEach(cleanup);

test("should render", () => {
    const div = document.createElement("input");
    ReactDOM.render(<Input />, div);
});

test("matches snapshot", () => {
    const tree = renderer.create(<Input />).toJSON();
    expect(tree).toMatchSnapshot();
});


// test("matches snapshot", () => {
//     const input = render(<Input />);
//     fireEvent.change(input,{target: {value:"React Jest Testing..."}});
//     // fireEvent.click(<Button label="Clicl!"/>);
//     const { getByText } = render(<Input />);
//     // const { getByText } = render(<Button label="Click!"/>);
//     getByText("React Jest Testing...");
//     // getByText("Click!");
    
// });