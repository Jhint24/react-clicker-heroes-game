import React from 'react';
import './Container.css';
import Heroes from '../Heroes';

const Container = props => (
  <div className="container background-cont">
    <div className="click-pictures">
      {props.heroesPictured.map((clickers, i) => (
        <Heroes key={i} hero={clickers} clickedEvent={props.clicked} />
      ))}
    </div>
  </div>
);

export default Container;
