import React, { useState } from 'react';
import Country from '../Country/Country.js';
import Search from '../Search/Search.js';
import { useCountries } from '../../hooks/useCountries..js';
import './Main.css';

export default function Main() {
  const countries = useCountries();

  const [filter, setFilter] = useState('');

  return (
    <main>
      <Search filter={filter} />
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.id} {...country} />
        ))}
      </div>
    </main>
  );
}
