import React, {useState} from "react";
import "../styles/App.css";
import Search from "./SearchComponent";
import SearchResults from "./SearchResultsComponent";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img className="nasa-logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" alt="nasaLogo" />
      <Search setSearchResults={setSearchResults}/>
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
