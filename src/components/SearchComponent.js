import React, { useState } from "react";
import "../styles/SearchStyle.css";
import getImages from "../requests/getImagesRequest";

const Search = ({setSearchResults}) => {
    const [value, setValue] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchResults(getImages(value));
    };

    return (
        <>
        <form className="searchForm" onSubmit={handleSubmit}>
            <input className="search-input" type="text" onChange={(e) => setValue(e.target.value)}/>
            <button className="search-button" type="submit">Tally Ho!</button>
        </form>
        </>
    );
};

export default Search;