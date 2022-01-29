import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserJournal } from "../helpers/api.js";
import FilterPanel from "./FilterPanel.js";
import LandingPage from "./LandingPage.js";
import Nav from "./Nav.js";
import { BsChevronDoubleDown } from "react-icons/bs";

const Main = () => {
  const location = useLocation();

  const { data } = useQuery("userData", getUserJournal);

  const handleToggle = (e) => {
    document.getElementById("filter-panel").classList.remove("hide-page");
    document.getElementById("filter-panel").classList.add("show-page");
    window.scroll({
      top: 950,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main>
        <div className="min-h-screen bg-main overflow-x-hidden">
          <Nav />
          <section className="flex flex-col justify-center items-center bg-main mx-8">
            <LandingPage />
            <div className="flex flex-col justify-center items-center font-Roboto mt-32 sm:mt-56 text-xl text-contrast gap-4">
              <p>Get Started</p>
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
          <FilterPanel user={location.state} />
        </section>
      </main>
    </>
  );
};

export default Main;
