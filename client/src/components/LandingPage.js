import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Slider from './Slider.js';
import { getCoffees } from '../helpers/api.js';
import { strike } from '../helpers/UI.js';
import axios from 'axios';

const LandingPage = () => {
  const [origin, setOrigin] = useState(null);
  const [process, setProcess] = useState(null);
  const [profile, setProfile] = useState(null);
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

  const handleSearch = async () => {
    // const { data } = await axios.post('/api/coffee/test', {
    //   origin,
    //   process,
    //   profile,
    // });
    // setFilterData(data);
  };

  const resetFilter = (e) => {
    const current = [...document.getElementsByClassName('selected')];
    for (const x of current) {
      x.classList.remove('selected');
    }
    setOrigin(null);
    setProcess(null);
    setProfile(null);
  };

  if (isLoading) return <p>Loading data</p>;
  return (
    <>
      {data && (
        <>
          <main className="flex flex-col bg-gray-100 font-Roboto">
            <div className="h-screen flex flex-col justify-center gap-4 mx-4 sm:mx-24">
              <section className="text-center mb-10">
                <h1 className="text-4xl font-semibold">Kávé</h1>
                <h2>TO GET STARTED CHOOSE AT LEAST ONE FILTER BELOW</h2>
                <h2>COMBINE THE FILTERS FOR MORE SPECIFIC RESULTS</h2>
              </section>
              <section
                className="text-center"
                style={{ border: '2px solid black' }}
              >
                <h2>REGION</h2>
                <div
                  id="origin-wrapper"
                  className="font-Roboto flex flex-wrap gap-4 justify-center w-full p-5 shadow-lg"
                >
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Boliva"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    BOLIVA
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Brazil"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    BRAZIL
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Colombia"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    COLOMBIA
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Costa Rica"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    COSTA RICA
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Ecuador"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    ECUADOR
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Ethiopia"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    ETHIOPIA
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="El Salvador"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    EL SALVADOR
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Guatemala"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    GUATEMALA
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Honduras"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    HONDURAS
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Myanmar"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    MYANMAR
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Mexico"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    MEXICO
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Nicaragua"
                    onClick={(event) =>
                      strike(event, 'origin-wrapper', setOrigin)
                    }
                  >
                    NICARAGUA
                  </div>
                </div>
              </section>
              <section className="text-center border-black border-2">
                <h2>PROCESS</h2>
                <div
                  id="process-wrapper"
                  className="font-Roboto p-5 flex justify-evenly flex-wrap w-full shadow-lg"
                >
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Washed"
                    onClick={(event) =>
                      strike(event, 'process-wrapper', setProcess)
                    }
                  >
                    WASHED{' '}
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Honey"
                    onClick={(event) =>
                      strike(event, 'process-wrapper', setProcess)
                    }
                  >
                    HONEY{' '}
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Natural"
                    onClick={(event) =>
                      strike(event, 'process-wrapper', setProcess)
                    }
                  >
                    NATURAL{' '}
                  </div>
                </div>
              </section>
              <section className="text-center border-black border-2">
                <h2>PROFILE</h2>
                <div
                  id="profile-wrapper"
                  className="font-Roboto p-5 flex justify-evenly flex-wrap w-full"
                >
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Filter"
                    onClick={(event) =>
                      strike(event, 'profile-wrapper', setProfile)
                    }
                  >
                    FILTER{' '}
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Espresso"
                    onClick={(event) =>
                      strike(event, 'profile-wrapper', setProfile)
                    }
                  >
                    ESPRESSO{' '}
                  </div>
                  <div
                    className="transform hover:scale-110 px-2"
                    data-id="Omni"
                    onClick={(event) =>
                      strike(event, 'profile-wrapper', setProfile)
                    }
                  >
                    OMNI{' '}
                  </div>
                </div>
              </section>
              <section className="w-full flex justify-evenly border-black border-2 p-8">
                <div
                  className=" px-4 py-2 rounded-sm hover:bg-black hover:text-white hover:font-semibold"
                  onClick={handleSearch}
                >
                  START
                </div>
                <div
                  className=" px-4 py-2 rounded-sm hover:bg-black hover:text-white hover:font-semibold"
                  onClick={resetFilter}
                >
                  RESET
                </div>
              </section>
            </div>

            <div className="w-3/5 flex flex-col justify-evenly items-center mx-5 mt-2">
              <section
                style={{ border: '1px solid black' }}
                className="grid grid-cols-6 grid-rows-6 h-5/6 w-full"
              >
                <Slider />
              </section>
              <button onClick={handleToggle}>explore</button>
            </div>
          </main>
          <section id="more-recs">
            <p>Hello there</p>
          </section>
        </>
      )}
    </>
  );
};

export default LandingPage;
