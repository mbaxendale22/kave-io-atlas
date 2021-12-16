import React, { useState, useEffect } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import Description from './coffeeInfo/Description.js';
import Production from './coffeeInfo/Production.js';
import Profile from './coffeeInfo/Profile.js';
import { useQueryClient } from 'react-query';
import { useQuery } from 'react-query';
import { getCoffees } from '../helpers/api.js';

const Slider = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData('coffee');
  console.log(data);
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current === data.length - 1 ? 0 : current + 1);
  const previous = () =>
    setCurrent(current === 0 ? data.length - 1 : current - 1);

  return (
    <>
      {data &&
        data.map((c, i) => {
          return (
            <>
              <div
                key={data._id}
                style={{ border: '1px solid black' }}
                className={
                  i === current
                    ? 'col-start-4 col-end-7 row-start-1 row-end-7 mx-5'
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
                    ? 'opacity-100 transition duration-500 ease in relative col-start-1 col-end-4 row-start-3 row-end-6'
                    : 'hidden'
                }
                style={{ border: '5px solid black' }}
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
                    ? ' col-start-1 col-end-4 row-start-6 row-end-7 '
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
                style={{ border: '1px solid black' }}
                className={
                  i === current
                    ? 'col-start-1 col-end-4 row-start-1 row-end-3'
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
    </>
  );
};

export default Slider;
