import renderer from "react-test-renderer";
import Search from "../components/SearchComponent";

describe("search component", () =>{
    const validProps = "generic search term";
    const testRenderer = renderer.create(<Search setSearchResults = {validProps} />);

    it("search component renders correctly", () =>{
        expect(testRenderer).toMatchSnapshot();
    });
});