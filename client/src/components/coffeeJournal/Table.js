import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserJournal } from "../../helpers/api";

const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [journalData, setJournalData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserJournal(pageNumber);
      setJournalData(data);
    };
    getData();
  }, [pageNumber]);


  const changeBackgroundOnSelection = (num) => {
    const buttons = document.getElementById('nav-btns')
    const btnArray = Array.from(buttons.children)
    const [ currentActiveBtn ] = btnArray.filter(btn => btn.classList.contains('active-btn'))
    currentActiveBtn.classList.remove('active-btn');
    const [nextActiveBtn] = btnArray.filter(btn => btn.innerText === num.toString());
    nextActiveBtn.classList.add('active-btn')
  }

  const changePage = (num) => {
    changeBackgroundOnSelection(num)
    setPageNumber(num);
  };

  const nextPage = () => {
    let currentPage = pageNumber
    if (pageNumber === 4) {
      return
    } else {
      changeBackgroundOnSelection(currentPage + 1)
      setPageNumber(currentPage + 1)
    }
  }
  const prevPage = () => {
    let currentPage = pageNumber
    if (pageNumber === 1) {
      return
    } else {
      changeBackgroundOnSelection(currentPage - 1)
      setPageNumber(currentPage - 1)
    }
  }

  if (!journalData) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl ">
        <div className="py-8">
          <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <h2 className="text-2xl leading-tight font-Montserrat text-contrast uppercase">
              Your Coffees
            </h2>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-xs sm:text-sm uppercase font-Montserrat"
                    >
                      Coffee
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-xs sm:text-sm uppercase font-Montserrat hidden sm:block"
                    >
                      Origin
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-xs sm:text-sm uppercase font-Montserrat"
                    >
                      Roaster
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-xs sm:text-sm uppercase font-Montserrat"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {journalData.map((entry) => (
                    <tr key={entry._id} className="font-Roboto">
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs sm:text-sm">
                        <div className="flex flex-col items-center">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {entry.coffee.title}
                          </p>
                          <p className="text-gray-900 sm:hidden whitespace-no-wrap">
                            {entry.coffee.origin}
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs sm:text-sm hidden sm:block">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {entry.coffee.origin}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs sm:text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {entry.roaster.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs sm:text-sm">
                        <Link
                          to={{ pathname: `/journal/${entry._id}` }}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                <div className="flex items-center" id='nav-btns'>
                  <button
                    type="button"
                    className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                      onClick={prevPage}
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border-t border-b text-base hover:bg-gray-100 font-Montserrat active-btn "
                    onClick={() => changePage(1)}
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border text-base  hover:bg-gray-100 font-Montserrat"
                    onClick={() => changePage(2)}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border-t border-b text-base hover:bg-gray-100 font-Montserrat"
                    onClick={() => changePage(3)}
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border text-base hover:bg-gray-100 font-Montserrat"
                    onClick={() => changePage(4)}
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl hover:bg-gray-100"
                     onClick={nextPage}
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Table;
