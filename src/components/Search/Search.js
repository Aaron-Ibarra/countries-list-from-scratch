import React, { useState } from 'react';
import { useCountries } from '../../hooks/useCountries..js';
import './Search.css';

export default function Search(filter, setFilter) {
  const countries = useCountries();
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

  const handleFilter = (e) => {
    setOption(e.target.value);
  };

  return (
    <div>
      <select value={option} onChange={handleFilter}>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
        ;
      </select>
    </div>
  );
}
