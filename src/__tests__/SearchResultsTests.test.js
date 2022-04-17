import renderer from "react-test-renderer";
import SearchResults from "../components/SearchResultsComponent";

describe("search results component", () => {
    const validProps = ["image1", "image2", "image3"]
    const testRenderer = renderer.create(<SearchResults results={validProps}/>);

    it("search results component renders correctly", () => {
        expect(testRenderer).toMatchSnapshot();
    });
});