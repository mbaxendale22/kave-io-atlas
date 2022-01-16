import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Description from './coffeeInfo/Description.js';
import Production from './coffeeInfo/Production.js';
import Profile from './coffeeInfo/Profile.js';
import { useQuery } from 'react-query';
import { testRoute } from '../helpers/api';
import { useLocation } from 'react-router-dom';
import Nav from './Nav.js';
import Favourite from './coffeeInfo/Favourite.js';
import Origin from './coffeeInfo/Origin.js';
const Slider = () => {
  const { state } = useLocation();

  const { data, isLoading } = useQuery('coffeeInitial', () => testRoute(state));

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current === data.length - 1 ? 0 : current + 1);
  const previous = () =>
    setCurrent(current === 0 ? data.length - 1 : current - 1);

    console.log(data[0].origin)

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className="h-screen bg-main sm:layout">
        <Nav />
        {data.length > 0 ? (
          <div className="grid grid-cols-4 grid-rows-4 gap-y-4 sm:grid-cols-6 sm:grid-rows-6 sm:layout h-5/6 w-full sm:max-h-5/6 sm:max-w-5/6">
            {data &&
              data.map((c, i) => {
                return (
                  <>
                    <div
                      key={data._id}
                      className={
                        i === current
                          ? ' col-start-1 col-end-1 flex flex-col justify-center items-center pt-3 m-2 info-card font-Roboto text-sm sm:hidden text-gray-700'
                          : 'hidden'
                      }
                    >
                      <p>{c.price}</p>
                      <a
                        className="hover:bg-black px-2 hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                        href={c.url}
                      >
                        Buy From Roaster
                      </a>
                    </div>

{/* Description */}

                    <div
                      className={
                        i === current
                          ? ' col-start-1 col-end-7 row-start-4 row-end-7 sm:col-start-4 sm:col-end-7 sm:row-start-1 sm:row-end-7 sm:mx-5 sm:border-2 sm:border-black sm:shadowm-md info-card'
                          : 'hidden'
                      }
                    >
                      <Description
                        url={c.url}
                        price={c.price}
                        description={c.description}
                      />
                    </div>

{/* Image */}

                    <div
                      key={c._id}
                      className={
                        i === current
                          ? 'opacity-100 transition duration-500 ease in relative col-start-1 col-end-3 row-start-2 row-end-4 sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-6 sm:mx-5'
                          : 'hidden'
                      }
                    >
                      {i === current && (
                        <img
                          className="rounded-xl md:shadow-2xl  object-cover h-full  w-full"
                          src={c.image}
                          alt={c.title}
                        />
                      )}

                      <FaAngleDoubleLeft
                        color="white"
                        size="9%"
                        className=" shadow-md absolute bottom-4 left-4 cursor-pointer z-10 text-3xl"
                        onClick={previous}
                      />
                      <FaAngleDoubleRight
                        color="white"
                        size="9%"
                        className="shadow-md absolute bottom-4 right-4 cursor-pointer z-10 text-3xl"
                        onClick={next}
                      />
                    </div>

{/* Origin */}

                    <div
                      key={c._id}
                      className={
                        i === current
                          ? 'opacity-100 hidden sm:flex info-card sm:border-2 sm:border-black sm:shadowm-md sm:col-start-3 sm:col-end-3 sm:row-start-3 sm:row-end-4'
                          : 'hidden'
                      }
                    >
                      {i === current && ( 
                        <Origin origin={c.origin} />
                      )}
                    </div>

{/* Add to Journal */}

                    <div
                      key={c._id}
                      className={
                        i === current
                          ? 'opacity-100 info-card m-2 sm:border-2 sm:border-black sm:shadowm-md col-start-2 col-end-2 row-start-1 row-end-1 sm:col-start-3 sm:col-end-3 sm:row-start-4 sm:row-end-5'
                          : 'hidden'
                      }
                    >
                      {i === current && ( 
                        <Favourite />
                      )}
                    </div>

{/* Roasted by and produced by card */}

                    <div
                      className={
                        i === current
                          ? ' col-start-3 col-end-5 row-start-3 sm:col-start-1 sm:col-end-4 sm:row-start-6 sm:row-end-7 '
                          : 'hidden'
                      }
                    >
                      <Production
                        roaster={c.roaster}
                        producer={c.producer}
                        url={c.url}
                      />
                    </div>

{/* Profile card */}

                    <div
                      className={
                        i === current
                          ? ' col-start-3 col-end-5 row-start-1 row-end-3 sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3'
                          : 'hidden'
                      }
                    >
                      <Profile
                        process={c.process}
                        profile={c.profile}
                        notes={c.notes}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        ) : (
          <div className="flex h-72 justify-center items-center font-Roboto text-contrast text-2xl">
            <p>Sorry, we couldn't find any coffees matching your search!</p>
          </div>
        )}
      </section>
    </>
  
  );
};

export default Slider;
