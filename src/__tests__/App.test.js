import renderer from "react-test-renderer";
import App from "../components/App";

describe("App", () => {
  const testRenderer = renderer.create(<App />);
  it("app renders correctly", () => {
    expect(testRenderer).toMatchSnapshot();
  });
});