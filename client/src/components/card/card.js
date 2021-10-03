import React from "react";
import "./card.css"


//<>
export default function Card({ concept, date, type, amount }) {
    return (
        <div className="line_register">
            <p className="p2">{concept}</p>
            <p className="p2">{date}</p>
            <p className="p2">{type}</p>
            <p className="p2">${amount}</p>
        </div>
    )


};