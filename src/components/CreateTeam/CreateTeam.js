import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, createTeam }) => {
    return (
        <>
            <button>
                <h1 onClick={createTeam}>
                    <Link to="/teampage">{text}</Link>
                </h1>
            </button>
        </>
    )
}

export default Button; 