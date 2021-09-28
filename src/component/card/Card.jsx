import React from 'react';
import './Card.css'

const Card = (props) => {
    const {data} =props
    return (
        <div className="card">
             <div className="container">
              {/* <a href="">{data.meta_description}</a> */}
             </div>
        </div>
    )
}

export default Card
