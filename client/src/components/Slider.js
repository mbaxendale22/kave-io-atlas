import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Description from './coffeeInfo/Description.js';
import Production from './coffeeInfo/Production.js';
import Profile from './coffeeInfo/Profile.js';
import { useQuery } from 'react-query';
import { testRoute } from '../helpers/api';
const Slider = ({ filterData }) => {
  const { data } = useQuery('coffeeInitial', () => testRoute(filterData));
  console.log(data);
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current === data.length - 1 ? 0 : current + 1);
  const previous = () =>
    setCurrent(current === 0 ? data.length - 1 : current - 1);

  return (
    // <div className="max-h-full">
    <div className="grid grid-cols-4 grid-rows-4 gap-y-4 sm:grid-cols-6 sm:grid-rows-6 sm:layout h-full w-full sm:max-h-5/6 sm:max-w-5/6">
      {data &&
        data.map((c, i) => {
          return (
            <>
              <div
                key={data._id}
                className={
                  i === current
                    ? ' col-start-1 col-end-3 flex flex-col justify-center items-center pt-3 font-Roboto text-sm sm:hidden text-gray-700'
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
              <div
                className={
                  i === current
                    ? ' col-start-1 col-end-7 row-start-4 row-end-7 sm:col-start-4 sm:col-end-7 sm:row-start-1 sm:row-end-7 sm:mx-5 sm:border-2 sm:border-black sm:shadowm-md'
                    : 'hidden'
                }
              >
                <Description
                  url={c.url}
                  price={c.price}
                  description={c.description}
                />
              </div>

              <div
                key={c._id}
                className={
                  i === current
                    ? 'opacity-100 transition duration-500 ease in relative col-start-1 col-end-3 row-start-2 row-end-4 sm:col-start-1 sm:col-end-4 sm:row-start-3 sm:row-end-6'
                    : 'hidden'
                }
              >
                {i === current && (
                  <img
                    className="rounded-xl shadow-2xl  object-cover h-full  w-full"
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

              <div
                className={
                  i === current
                    ? ' col-start-3 col-end-5 row-start-1 row-end-3  sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-3'
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
    // {/* <>
    //   <button onClick={handleToggle}>explore</button>
    //   {' '}
    // </> */}
    // </div>
  );
};

export default Slider;
