import React from 'react';
import './Card.scss';

export const Card = (item) => {

    console.log(item.props)
    return (
        <>
            <div className='card'>
                <img className='card-image' src={item.props.image} alt={item.props.name} />
                <h4>{item.props.name}</h4>
                <p>Gender: {item.props.gender}</p>
                <p>Status: {item.props.status}</p>
            </div>
        </>
    );
};
