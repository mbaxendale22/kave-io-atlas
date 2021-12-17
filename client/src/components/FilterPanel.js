import React, { useState } from 'react';
import { strike } from '../helpers/UI';
const FilterPanel = () => {
  const [origin, setOrigin] = useState(null);
  const [process, setProcess] = useState(null);
  const [profile, setProfile] = useState(null);

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
  return (
    <div className="max-h-full text-xs sm:text-base flex flex-col justify-center sm:gap-2">
      <div className="text-center mb-5">
        {/* <h1 className="text-4xl mb-5 font-semibold">Kávé</h1> */}
        <h2>TO GET STARTED CHOOSE AT LEAST ONE FILTER BELOW</h2>
        <h2>COMBINE THE FILTERS FOR MORE SPECIFIC RESULTS</h2>
      </div>
      <section className="text-center border-gray-600 border-2 pt-2 rounded-sm">
        <h2 className=" text-base sm:text-xl font-semibold">REGION</h2>
        <div
          id="origin-wrapper"
          className="font-Roboto flex flex-wrap gap-4 justify-center w-full p-5 shadow-lg"
        >
          <div
            className="transform hover:scale-110 px-2"
            data-id="Boliva"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            BOLIVA
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Brazil"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            BRAZIL
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Colombia"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            COLOMBIA
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Costa Rica"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            COSTA RICA
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Ecuador"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            ECUADOR
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Ethiopia"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            ETHIOPIA
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="El Salvador"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            EL SALVADOR
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Guatemala"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            GUATEMALA
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Honduras"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            HONDURAS
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Myanmar"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            MYANMAR
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Mexico"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            MEXICO
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Nicaragua"
            onClick={(event) => strike(event, 'origin-wrapper', setOrigin)}
          >
            NICARAGUA
          </div>
        </div>
      </section>
      <section className="text-center border-black border-2 rounded-sm">
        <h2 className="text-base sm:text-xl font-semibold">PROCESS</h2>
        <div
          id="process-wrapper"
          className="font-Roboto p-5 flex justify-evenly flex-wrap w-full shadow-lg"
        >
          <div
            className="transform hover:scale-110 px-2"
            data-id="Washed"
            onClick={(event) => strike(event, 'process-wrapper', setProcess)}
          >
            WASHED{' '}
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Honey"
            onClick={(event) => strike(event, 'process-wrapper', setProcess)}
          >
            HONEY{' '}
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Natural"
            onClick={(event) => strike(event, 'process-wrapper', setProcess)}
          >
            NATURAL{' '}
          </div>
        </div>
      </section>
      <section className="text-center border-black border-2 pt-2 rounded-sm">
        <h2 className="text-base sm:text-xl font-semibold">PROFILE</h2>
        <div
          id="profile-wrapper"
          className="font-Roboto p-5 flex justify-evenly flex-wrap w-full"
        >
          <div
            className="transform hover:scale-110 px-2"
            data-id="Filter"
            onClick={(event) => strike(event, 'profile-wrapper', setProfile)}
          >
            FILTER{' '}
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Espresso"
            onClick={(event) => strike(event, 'profile-wrapper', setProfile)}
          >
            ESPRESSO{' '}
          </div>
          <div
            className="transform hover:scale-110 px-2"
            data-id="Omni"
            onClick={(event) => strike(event, 'profile-wrapper', setProfile)}
          >
            OMNI{' '}
          </div>
        </div>
      </section>
      <section className="w-full flex justify-evenly border-blue-500 border-2 p-8 rounded-sm">
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
  );
};

export default FilterPanel;
