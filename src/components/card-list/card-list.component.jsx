import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
    console.log(props)
return <div className="card-list"> 
{ props.apps.map(app => (
    // <h1 key={app.id}>{app.name}</h1>
    <Card key={app.id} app={app} /> 
  ))}
</div>
};