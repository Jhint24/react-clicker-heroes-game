import React from 'react';
import './Heroes.css';

const Heroes = props => (
  <div className="card">
    <img
      className="card-img-top hero-image"
      onClick={event => props.clickedEvent(event)}
      src={props.hero}
      alt="Hero Images"
    />
  </div>
);
export default Heroes;
