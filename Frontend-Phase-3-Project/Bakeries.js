import React from "react";
import SetUpBakery from "./SetUpBakery";

function Bakeries({bakeries}){

    let displayBakeries  = bakeries.map((bakery) =>{
        return (
            <SetUpBakery
            name = {bakery.name}
            bakeryID = {bakery.id}
            key = {bakery.id}
            location = {bakery.location}
            branch = {bakery.branch}
            />
        )
    })

    return(
        <div className="Cards">
            {displayBakeries}
        </div>
    )

}

export default Bakeries