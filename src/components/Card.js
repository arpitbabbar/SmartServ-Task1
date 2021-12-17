import React from 'react'

const Card = (props) => {
    let { title, price, popularity } = props; // destructuring data from props
    // and showing them in cards
    return (
        <>
            <div className="card mx-2 my-5" style={{ width: "18rem" }} >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Price :- {price}</p>
                    <p className="card-text">Popularity :- {popularity}</p>
                </div>
            </div>
        </>
    )
}

export default Card;
