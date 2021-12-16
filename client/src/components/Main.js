import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Slider from './Slider.js';
import { getCoffees } from '../helpers/api.js';
import FilterPanel from './FilterPanel.js';
import LandingPage from './LandingPage.js';
import axios from 'axios';

const Main = () => {
  const [filterData, setFilterData] = useState([]);
  const filteredData = [];

  const initialData = new Set();
  const generateRandomIndexes = () => {
    while (initialData.size < 5) {
      initialData.add(Math.floor(Math.random() * 126));
    }
  };

  generateRandomIndexes();

  const { data, isLoading, isError } = useQuery('coffee', getCoffees, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const handleToggle = (e) => {
    document.getElementById('more-recs').classList.remove('hide-page');
    document.getElementById('more-recs').classList.add('show-page');
    window.scroll({
      top: 950,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (isLoading) return <p>Loading data</p>;
  return (
    <main>
      <LandingPage />
      <FilterPanel />

      <div className="flex h-screen flex-col justify-evenly items-center">
        <section className="grid grid-cols-6 grid-rows-6 w-full">
          <Slider />
        </section>
        <button onClick={handleToggle}>explore</button>
      </div>
      <section id="more-recs">
        <p>Hello there</p>
      </section>
    </main>
  );
};

export default Main;
