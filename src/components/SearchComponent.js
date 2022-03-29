import React, { useState } from "react";
import "../styles/SearchStyle.css";

const Search = () => {
    const [value, setValue] = useState();

    return (
        <>
        <form className="searchForm">
            <input className="search-input" type="text" onChange={(e) => setValue(e.target.value)}/>
            <button className="search-button" type="submit">Tally Ho!</button>
        </form>
        </>
    );
};

export default Search;