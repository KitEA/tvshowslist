import React from "react";
import PropTypes from 'prop-types';

const PageSelector = ({ previousPage, nextPage }) => {
    return (
        <div>
            <button onClick={previousPage}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>
        </div>
    )
}

PageSelector.propTypes = {
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired
}

export default PageSelector;