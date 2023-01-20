import React, { useState } from 'react';
import Country from '../Country/Country.js';
import Search from '../Search/Search.js';
import { useCountries } from '../../hooks/useCountries..js';
import './Main.css';

export default function Main() {
  const { countries, error } = useCountries();

  const [filter, setFilter] = useState('All');

  function filterHandler(data) {
    if (data === 'All') {
      return countries.map((country) => <Country key={country.id} {...country} />);
    } else {
      return filter.map((country) => <Country key={country.id} {...country} />);
    }
  }

  return (
    <main>
      <Search setFilter={setFilter} />
      <div className="countries">{filterHandler(filter)}</div>
      <p style={{ color: 'red' }}>{error}</p>
    </main>
  );
}
