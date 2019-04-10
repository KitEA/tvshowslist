import React from "react";

const PageSelector = ({ previousPage, nextPage }) => {
    return (
        <div>
            <button onClick={previousPage}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>
        </div>
    )
}

export default PageSelector;