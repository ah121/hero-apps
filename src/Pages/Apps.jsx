import React, { useState } from "react";
import useApps from "../Hook/useApps";
import SingleCard from "../Components/SingleCard";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const convertSearch = search.trim().toLocaleLowerCase();
  const searchedApps = convertSearch
    ? apps.filter((app) =>
        app.title.toLocaleLowerCase().includes(convertSearch)
      )
    : apps;
  if (searchedApps.length === 0) {
    return (
      <div>
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="text-2xl font-bold mb-5">No Applications Found</h2>
          <button
            onClick={() => setSearch("")}
            className="btn bg-gradient-to-r from-purple-600 to-purple-500 text-white"
          >
            Show All App
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-200 py-20">
      <div className="p-3 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold">Our All Applications</h1>
        <p className="text-gray-400 pt-4 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto p-3">
        <div className="flex items-center pt-10">
          <div className="flex-1">
            <span className="font-bold">
              ({searchedApps.length}) Apps Found
            </span>
          </div>
          <div className="flex-1 flex justify-end">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 py-10">
          {searchedApps.map((app) => (
            <SingleCard app={app} key={app.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
