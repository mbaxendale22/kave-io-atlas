import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Slider from './Slider.js';
import { getCoffees } from '../helpers/api.js';
import FilterPanel from './FilterPanel.js';
import LandingPage from './LandingPage.js';
import axios from 'axios';

const Main = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [filterData, setFilterData] = useState({
    origin: '',
    process: '',
    profile: '',
  });

  console.log(filterData);
  console.log(showSlider);

  const initialData = new Set();
  const generateRandomIndexes = () => {
    while (initialData.size < 5) {
      initialData.add(Math.floor(Math.random() * 126));
    }
  };

  generateRandomIndexes();

  // const { data, isLoading, isError } = useQuery('coffee', getCoffees, {
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  // });

  const handleToggle = (e) => {
    document.getElementById('more-recs').classList.remove('hide-page');
    document.getElementById('more-recs').classList.add('show-page');
    window.scroll({
      top: 950,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <main>
        <section className="h-screen flex justify-center items-center ">
          <LandingPage />
        </section>
        <section className="h-screen mx-2 sm:mx-8">
          <FilterPanel
            setShowSlider={setShowSlider}
            setFilterData={setFilterData}
            filterData={filterData}
          />
        </section>
        {showSlider && (
          <section className="flex h-screen sm:layout justify-center items-center">
            <Slider filterData={filterData} />
          </section>
        )}
        <button onClick={handleToggle}>explore</button>
        <section id="more-recs">
          <p>Hello there</p>
        </section>
      </main>
    </>
  );
};

export default Main;
