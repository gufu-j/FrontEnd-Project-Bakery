import React from "react";
import { Link } from "react-router-dom";

function SetUpBakery({name, location, branch, bakeryID}){

return(
    <div className = "Bakery">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Branch: {branch}</p>
        <Link to={`/bakeryBread/${bakeryID}`}>
        <button> breads</button>
        </Link>
    </div>
)
}

export default SetUpBakery