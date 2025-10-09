import useApps from "../Hook/useApps";
const Install = () => {
  const { apps, loading } = useApps();
  return (
    <div className="bg-base-200 py-20">
      <div className="p-3 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-400 pt-4 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto p-3">
        <div className="flex items-center pt-10">
          <div className="flex-1">
            <span className="font-bold">({apps.length}) Apps Found</span>
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
              <input type="search" required placeholder="Search Apps" />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between  bg-white shadow-md rounded-md p-3 mt-5">
          <div className="flex items-center gap-3 ">
            <figure>
              <img
                src={apps.image}
                alt={apps.title}
                className="h-20 w-20 object-contain"
              />
            </figure>
            <div className="space-y-4">
              <h1 className="text-xl font-medium ">title</h1>
              <div className="flex gap-4">
                <div className="flex items-center   text-green-500">
                  <span>
                    <img
                      src="/icon-downloads.png"
                      alt="Download Icon"
                      className="w-4 h-4 mr-2"
                    />
                  </span>
                  <span>app.downloads</span>
                </div>
                <div className="flex items-center text-orange-400">
                  <span>
                    <img
                      src="/icon-ratings.png"
                      alt="Download Icon"
                      className="w-4 h-4 mr-2"
                    />
                  </span>
                  <span>app.ratingAvg</span>
                </div>
                <div>
                  <span className="text-gray-400">app.downloads</span>
                </div>
              </div>
            </div>
          </div>
          <button className="btn bg-green-400 text-white">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default Install;
