import { useState, useEffect } from "react";
import useApps from "../Hook/useApps";
import Spinner from "../Components/Spinner";
import { Bounce, toast, ToastContainer } from "react-toastify";
const parseDownloads = (downloadsString) => {
  if (!downloadsString) return 0;
  const num = parseFloat(downloadsString.replace(/[^\d.]/g, ""));
  const unit = downloadsString.toUpperCase().replace(/[\d.]/g, "");
  if (unit.includes("B")) {
    return num * 1000000000;
  }
  if (unit.includes("M")) {
    return num * 1000000;
  }
  if (unit.includes("K")) {
    return num * 1000;
  }
  return num;
};

const Install = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState("downloads_desc");
  const { loading } = useApps();

  useEffect(() => {
    const storedApps = localStorage.getItem("installedApp");

    if (storedApps) {
      try {
        const appList = JSON.parse(storedApps);
        if (Array.isArray(appList)) {
          setInstalledApps(appList);
        }
      } catch (error) {
        console.error("Error parsing local storage data:", error);
      }
    }
  }, []);
  const handleUninstall = (id, title) => {
    toast.success(`'${title}' has been successfully Uninstalled!`);
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApp", JSON.stringify(updatedApps));
  };
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  const sortedApps = [...installedApps].sort((a, b) => {
    const aDownloads = parseDownloads(a.downloads);
    const bDownloads = parseDownloads(b.downloads);

    if (sortOption === "downloads_desc") {
      return bDownloads - aDownloads;
    } else if (sortOption === "downloads_asc") {
      return aDownloads - bDownloads;
    }

    return 0;
  });

  const installedAppCount = installedApps.length;
  if (loading) {
    return <Spinner />;
  }

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
            <span className="font-bold">
              ({installedAppCount}) Apps Installed
            </span>
          </div>
          <div className="flex-1 flex justify-end items-center space-x-3">
            <label className="text-sm font-medium text-gray-600 whitespace-nowrap">
              Sort By:
            </label>
            <div className="">
              <select
                id="sort-select"
                className=" bg-white border border-gray-300 rounded-lg py-2  text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 shadow-sm"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="downloads_desc"> High-Low</option>
                <option value="downloads_asc"> Low-High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-center gap-3 justify-between bg-white shadow-md rounded-md p-3"
            >
              <div className="flex items-center justify-around sm:justify-start gap-3 w-full">
                <figure>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-20 w-20 object-contain"
                  />
                </figure>
                <div className="space-y-4">
                  <h1 className="text-xl font-medium ">{app.title}</h1>
                  <div className="flex gap-4">
                    <div className="flex items-center text-green-500">
                      <span>
                        <img
                          src="/icon-downloads.png"
                          alt="Download Icon"
                          className="w-4 h-4 mr-2"
                        />
                      </span>
                      <span>{app.downloads}</span>
                    </div>
                    <div className="flex items-center text-orange-400">
                      <span>
                        <img
                          src="/icon-ratings.png"
                          alt="Rating Icon"
                          className="w-4 h-4 mr-2"
                        />
                      </span>
                      <span>{app.ratingAvg}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">{app.size}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="btn bg-green-400 text-white"
              >
                Uninstall
              </button>
            </div>
          ))}

          {installedAppCount === 0 && (
            <div className="text-center text-gray-500 p-10">
              You haven't installed any apps yet.
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Install;
