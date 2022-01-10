import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Slider from './Slider.js';
import { getCoffees } from '../helpers/api.js';
import FilterPanel from './FilterPanel.js';
import LandingPage from './LandingPage.js';
import axios from 'axios';
import Nav from './Nav.js';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Main = () => {
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
    document.getElementById('filter-panel').classList.remove('hide-page');
    document.getElementById('filter-panel').classList.add('show-page');
    window.scroll({
      top: 950,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <main>
        <div className="h-screen border bg-main">
          <Nav />
          <section className="flex flex-col w-screen h-5/6 justify-center items-center bg-main ">
            <LandingPage />
            <div className="flex flex-col justify-center items-center mt-16 mb-12 text-xl text-contrast gap-4">
              <p>Quick Search</p>
              <div
                onClick={handleToggle}
                className="transform hover:scale-125 cursor-pointer"
              >
                {<BsChevronDoubleDown />}
              </div>
            </div>
          </section>
        </div>
        <section id="filter-panel" className="hide-page bg-main">
          <FilterPanel />
        </section>
      </main>
    </>
  );
};

export default Main;
