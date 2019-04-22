import React from "react";
import PropTypes from 'prop-types';

const PageSelector = ({ previousPage, nextPage }) => {
    return (
        <div className="page-selector">
            <button className="previous-page-button" onClick={previousPage}>&#8592; Previous page</button>
            <button className="next-page-button" onClick={nextPage}>Next page &#8594;</button>
        </div>
    )
}

PageSelector.propTypes = {
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired
}

export default PageSelector;