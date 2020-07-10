import React from "react"

const TableRow = ({title, description}) => (
    <div className="tableRow">
        <div className="tableRow-title">
            <h1>{title}</h1>
        </div>
        <div className="tableRow-description">
            <p>{description}</p>
        </div>
        <div className="tableRow-btn">
            <button type="button">Like</button>
        </div>
    </div>
)

export default TableRow