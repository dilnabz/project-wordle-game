import React from "react";
import "./Key.css";

export function Key({value}) {
    return(
        <button className="key">{value}</button>
    )
}