import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/SearchComponent";

describe("search component", () =>{
    const {asFragment} = render(<Search/>);

    it("search component renders correctly", () =>{
        expect(asFragment).toMatchSnapshot();
    });
});