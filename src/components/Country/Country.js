import React from 'react';
import './Country.css';

export default function Country({ name, iso2, iso3, local_name, continent }) {
  return (
    <div className="countryContainer">
      <div className="card">
        <img src={`https://flagcdn.com/w40/${iso2.toLowerCase()}.png`} width="40" alt={name} />
      </div>
    </div>
  );
}
