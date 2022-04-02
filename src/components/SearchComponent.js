import React, { useState } from "react";
import "../styles/SearchStyle.css";
import getImages from "../requests/getImagesRequest";

const Search = ({setSearchResults}) => {
    const [value, setValue] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
        // console.log(setSearchResults(await getImages(value)));
    };

    return (
        <div className="Search">
            <form className="searchForm" onSubmit={handleSubmit}>
                <input className="search-input" type="text" onChange={(e) => setValue(e.target.value)}/>
                <button className="search-button" type="submit">Tally Ho!</button>
            </form>
        </div>
    );
};

export default Search;