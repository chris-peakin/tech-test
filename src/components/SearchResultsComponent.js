/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../styles/SearchResultsStyle.css"

function SearchResults({ results }) {
    if (!results.length) {
        return <p>No results!</p>
    } else {
        return (
            <>
            <p className="paragraph">Search Results:</p>
            <div className="arranged-images">
            {results.map((image) =>  (
                <img className="card-image" src={image} alt="space-image" />
            ))}
            </ div> 
            </>
        );
    }
};

export default SearchResults;