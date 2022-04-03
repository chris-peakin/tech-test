import React from "react";
import {render} from "@testing-library/react";
import SearchResults from "../components/SearchResultsComponent";

describe("search results component", () => {
    const validProps = ["image1", "image2", "image3"]
    const {asFragment} = render(<SearchResults results={validProps}/>);

    it("search results component renders correctly", () => {
        expect(asFragment).toMatchSnapshot();
    });
});