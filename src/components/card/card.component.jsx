import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img
            alt='shake'
            src={props.shake.strDrinkThumb}
        />
        <h2>{props.shake.strDrink}</h2>
    </div>
);    