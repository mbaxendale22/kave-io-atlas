import React, { useState } from "react";
import { strike } from "../helpers/UI";
// import { testRoute } from "../helpers/api";
import { useHistory } from "react-router-dom";

const FilterPanel = ({ user }) => {
  const history = useHistory();
  const [filterData, setFilterData] = useState({
    origin: "",
    process: "",
    profile: "",
    user,
  });

  const handleSearch = () => {
    history.push({ pathname: "/slider", state: filterData });
  };

  const resetFilter = () => {
    const current = [...document.getElementsByClassName("selected")];
    for (const x of current) {
      x.classList.remove("selected");
    }
    // setShowSlider(false);
  };
  return (
    <div className="max-h-full text-xs sm:text-base font-Roboto flex flex-col justify-center gap-2 -mt-28">
      <div className="text-center text-lg sm:text-2xl mt-8 sm:mt-0 text-light sm:mb-5">
        <h2>CHOOSE AT LEAST ONE FILTER BELOW</h2>
        <h2>COMBINE THE FILTERS FOR MORE SPECIFIC RESULTS</h2>
      </div>
      <section className="text-center border-gray-600 border-2 pt-2 info-card mx-4">
        <h2 className=" text-lg font-Roboto sm:text-xl font-semibold">
          ORIGIN
        </h2>
        <div
          id="origin-wrapper"
          className="font-Roboto flex flex-wrap gap-4 justify-center w-full p-5 shadow-lg"
        >
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Boliva"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            BOLIVA
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Brazil"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            BRAZIL
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Colombia"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            COLOMBIA
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Costa Rica"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            COSTA RICA
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Ecuador"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            ECUADOR
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Ethiopia"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            ETHIOPIA
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="El Salvador"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            EL SALVADOR
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Guatemala"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            GUATEMALA
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Honduras"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            HONDURAS
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Kenya"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            KENYA
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Myanmar"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            MYANMAR
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Mexico"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            MEXICO
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Nicaragua"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            NICARAGUA
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Peru"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            PERU
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Rwanda"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            RWANDA
          </div>
          <div
            data-for="origin"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Tanzania"
            onClick={(event) =>
              strike(event, "origin-wrapper", filterData, setFilterData)
            }
          >
            TANZANIA
          </div>
        </div>
      </section>
      <section className="text-center border-black border-2 rounded-lg bg-light text-contrast shadow-md mx-4">
        <h2 className="text-lg sm:text-xl font-semibold">PROCESS</h2>
        <div
          id="process-wrapper"
          className="font-Roboto p-5 flex justify-evenly flex-wrap w-full shadow-lg"
        >
          <div
            data-for="process"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Washed"
            onClick={(event) =>
              strike(event, "process-wrapper", filterData, setFilterData)
            }
          >
            WASHED{" "}
          </div>
          <div
            data-for="process"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Honey"
            onClick={(event) =>
              strike(event, "process-wrapper", filterData, setFilterData)
            }
          >
            HONEY{" "}
          </div>
          <div
            data-for="process"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Natural"
            onClick={(event) =>
              strike(event, "process-wrapper", filterData, setFilterData)
            }
          >
            NATURAL{" "}
          </div>
        </div>
      </section>
      <section className="text-center border-black border-2 pt-2 rounded-lg bg-light text-contrast shadow-md mx-4">
        <h2 className="text-lg sm:text-xl font-semibold">PROFILE</h2>
        <div
          id="profile-wrapper"
          className="font-Roboto p-5 flex justify-evenly flex-wrap w-full"
        >
          <div
            data-for="profile"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Filter"
            onClick={(event) =>
              strike(event, "profile-wrapper", filterData, setFilterData)
            }
          >
            FILTER{" "}
          </div>
          <div
            data-for="profile"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Espresso"
            onClick={(event) =>
              strike(event, "profile-wrapper", filterData, setFilterData)
            }
          >
            ESPRESSO{" "}
          </div>
          <div
            data-for="profile"
            className="transform hover:scale-110 px-2 cursor-pointer"
            data-id="Omni"
            onClick={(event) =>
              strike(event, "profile-wrapper", filterData, setFilterData)
            }
          >
            OMNI{" "}
          </div>
        </div>
      </section>
      <section className="flex justify-evenly sm:border-black sm:border-2 sm:rounded-lg sm:bg-light sm:text-contrast sm:shadow-md mx-4">
        <div
          className=" px-4 py-2 sm:rounded-sm rounded-lg shadow-md sm:shadow-none sm:border-none border-black border-2 bg-light hover:bg-black hover:text-white hover:font-semibold"
          onClick={handleSearch}
        >
          START
        </div>
        <div
          className="px-4 py-2 sm:rounded-sm rounded-lg shadow-md sm:shadow-none sm:border-none border-black border-2 bg-light hover:bg-black hover:text-white hover:font-semibold"
          onClick={resetFilter}
        >
          RESET
        </div>
      </section>
    </div>
  );
};

export default FilterPanel;
