import React from 'react';
import './Country.css';

export default function Country({ name, iso2, local_name, continent }) {
  return (
    <div className="countryContainer">
      <div className="card">
        <img src={`https://flagcdn.com/w40/${iso2.toLowerCase()}.png`} width="40" alt={name} />
        <h2>{name}</h2>
        <p>{local_name}</p>
        <h3>{iso2}</h3>
        <h4>{continent}</h4>
      </div>
    </div>
  );
}
