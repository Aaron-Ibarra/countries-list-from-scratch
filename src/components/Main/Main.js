import React from 'react';
import Country from '../Country/Country.js';
import Search from '../Search/Search.js';
import { useCountries } from '../../hooks/useCountries..js';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      <Search />
      {countries.map((country) => (
        <Country key={country.id} {...country} />
      ))}
      ;
    </main>
  );
}
