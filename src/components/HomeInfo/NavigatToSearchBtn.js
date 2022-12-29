import React from "react";
import { NavLink } from "react-router-dom";

var NavigatToSearchBtn = _ => {
    return(
        <div className="open-search">
            <NavLink to='/SearchInfo'> Add a book</NavLink>
        </div>
    )
};

export default NavigatToSearchBtn;