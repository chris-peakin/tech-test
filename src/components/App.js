import React, {useState} from "react";
import "../styles/App.css";
import Search from "./SearchComponent";
import SearchResults from "./SearchResultsComponent";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  console.log("LOOK AT ME I'M BIG AND ATTENTION GRABBING");
  console.log(<SearchResults />);
  console.log("LOOK AT I AM ALSO BIG AND ATTENTION GRABBING")
  console.log(searchResults);
  return (
    <div className="App">
      <img className="nasa-logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="nasaLogo" />
      <Search setSearchResults={setSearchResults}/>
      <SearchResults />
    </div>
  );
}


export default App;
