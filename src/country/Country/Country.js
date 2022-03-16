import React from "react";

let Single = props => {
    console.log(props.country);
    let { name, population, flags } = props.country;
    return (
        <div className="singleItem">
            <h2>Name: {name.common}</h2>
            <h2>Population: {population}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Single;
