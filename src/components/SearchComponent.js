import React, { useState } from "react";
import "../styles/SearchStyle.css";
import getImages from "../requests/getImagesRequest";
import PropTypes from "prop-types";

const Search = ({setSearchResults}) => {
    const [value, setValue] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
    };

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <input className="search-input" type="text" onChange={(e) => setValue(e.target.value)}/>
                <button className="search-button" type="submit">Tally Ho!</button>
            </form>
        </div>
    );
};

Search.propTypes ={
    setSearchResults: PropTypes.string,
};

export default Search;