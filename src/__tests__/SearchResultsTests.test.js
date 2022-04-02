import React from "react";
import {render} from "@testing-library/react";
import SearchResults from "../components/SearchResultsComponent";

describe("search results component", () => {
    //Look at this again.
    const {asFragment} = render(<SearchResults results={SearchResults}/>);

    it("search results component renders correctly", () => {
        expect(asFragment).toMatchSnapshot();
    });
});