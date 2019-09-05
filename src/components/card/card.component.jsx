import React from 'react';
import './card.styles.css'
export const Card = props => (
<div className="card-container">
    <img alt="name" src={`https://robohash.org/${props.app.id}?set=set2`}></img>
    <h1>{props.app.name}</h1>
    <p>{props.app.email}</p>
</div>
);