/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../styles/SearchResultsStyle.css"
import PropTypes from "prop-types";

function SearchResults({ results }) {
    if (!results.length) {
        return <p className="paragraph">Either a term has not yet been entered, or there are no results for that particular term. Type a search term above and click "Tally Ho!".</p>
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

SearchResults.propTypes = {
    results: PropTypes.arrayOf(
        PropTypes.string
    ),
};

export default SearchResults;