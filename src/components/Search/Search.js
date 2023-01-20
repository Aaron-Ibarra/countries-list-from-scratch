import React, { useState } from 'react';
import { useCountries } from '../../hooks/useCountries..js';
import './Search.css';

export default function Search({ setFilter }) {
  const { countries } = useCountries();
  const [option, setOption] = useState('All');

  const continents = [
    'All',
    'North America',
    'Africa',
    'Asia',
    'Oceania',
    'South America',
    'Antarctica',
    'Europe',
  ];

  const handleFilterSelect = (e) => {
    setOption(e.target.value);
  };

  const handleFilterChange = () => {
    const filteredData = countries.filter(
      (country) => country.continent === option || option === 'All'
    );
    setFilter(filteredData);
  };

  return (
    <div>
      <select value={option} onChange={handleFilterSelect}>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
            {''}
          </option>
        ))}
        ;
      </select>
      <button onClick={handleFilterChange}>Search</button>
    </div>
  );
}
