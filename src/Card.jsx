// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MainImg from './assets/main.jpg'

function Card(props) {
  return (
      <div className="card">
        <img src={MainImg} alt="도시별 지도" className="card-img"/>
        <h1 className="card-title">{props.region}</h1>
        <h2 className="card-text">{props.number}</h2>
      </div>
  );
}

export default Card;
