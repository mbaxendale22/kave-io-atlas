import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom' 

const Table = ({ journal }) => {
  const [pageOne, setPageOne] = useState([ ...journal ]);
  const [pageTwo, setPageTwo] = useState([]);
  const [pageThree, setPageThree] = useState([]);
  const [pageFour, setPageFour] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const whichPage = () => {
    switch (pageNumber) {
      case 1:
        return pageOne;
      case 2:
        return pageTwo;
      case 3:
        return pageThree;
      default:
        return 1;
    }
  };

  console.log(pageOne)

  return (
    <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div class="py-8">
        <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 class="text-2xl leading-tight font-Montserrat text-contrast uppercase">Your Coffees</h2>
          <div class="text-end">
          </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-sm uppercase font-Montserrat"
                  >
                    Coffee
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-sm uppercase font-Montserrat"
                  >
                    Origin
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-sm uppercase font-Montserrat"
                  >
                    Roaster
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-sm uppercase font-Montserrat"
                  >
                    Score
                  </th>
                  <th
                    scope="col"
                    class="px-5 py-3 bg-contrast  border-b border-gray-200 text-light  text-left text-sm uppercase font-Montserrat"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {whichPage().map((entry) => (
                  <tr className='font-Roboto'>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div class="flex items-center">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {entry.coffee.title}
                        </p>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {entry.coffee.origin}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {entry.roaster.name}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {entry.score}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <Link to={{pathname: `/journal/${entry._id}`}} class="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div class="flex items-center">
                <button
                  type="button"
                  class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                  >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 font-Montserrat "
                  onClick={() => setPageNumber(1)}
                  >
                  1
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100 font-Montserrat"
                  onClick={() => setPageNumber(2)}
                  >
                  2
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100 font-Montserrat"
                    onClick={() => setPageNumber(3)}
                  >
                  3
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100 font-Montserrat"
                  onClick={() => setPageNumber(4)}
                >
                  4
                </button>
                <button
                  type="button"
                  class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
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
};

export default Table;
