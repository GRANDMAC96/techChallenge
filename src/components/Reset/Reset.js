import React from "react";

const Reset = ({ resetTeams }) => {
    return (
        <>
            <button
                className="btn btn-danger"
                onClick={resetTeams}
            >Reset</button>
        </>
    )
}

export default Reset; 