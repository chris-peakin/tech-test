import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/SearchComponent";

describe("search component", () =>{
    const validProps = "generic search term";
    const {asFragment} = render(<Search setSearchResults = {validProps} />);

    it("search component renders correctly", () =>{
        expect(asFragment).toMatchSnapshot();
    });
});