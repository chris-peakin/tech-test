/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../styles/SearchResultsStyle.css"

function SearchResults({ results }) {
    if (!results.length) {
        return <p>No results!</p>
    } else {
        return (
            <>
            <p className="paragraph">Search Results</p>
            <img 
                className="card-image" 
                src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
                alt="space-image" />
            </>
        );
    }
};

export default SearchResults;