import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Bounce, ToastContainer } from "react-toastify";
import useAppLogic from "../Hook/useAppLogic";
import { useNavigate } from "react-router";
import Spinner from "../Components/Spinner";
const AppDetail = () => {
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    chartData,
    isInstalled,
    installApp,
    loading,
    appExists,
  } = useAppLogic();
  const navigate = useNavigate();
  if (loading) {
    return <Spinner />;
  }
  if (!loading && appExists === false) {
    return navigate("/error");
  }
  return (
    <div className="bg-base-200">
      <div className="max-w-[1440px] mx-auto p-3">
        <div className="flex flex-col md:flex-row items-center gap-5 py-5 border-b-2 border-gray-200">
          <figure>
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain"
            />
          </figure>
          <div className="w-full">
            <div className="border-b-2 border-gray-200 space-y-3 text-center md:text-left">
              <h1 className="font-bold text-4xl">{title}</h1>
              <p className="pb-4">
                Developed by{" "}
                <span className="text-purple-600">{companyName}</span>
              </p>
            </div>
            <div className="flex justify-center md:justify-start gap-3 md:gap-10 pt-8">
              <div className="flex flex-col gap-2">
                <span>
                  <img
                    src="/icon-downloads.png"
                    alt="Download Icon"
                    className="w-10 h-10 mr-2"
                  />
                </span>
                <span className="text-sm sm:text-base">Downloads</span>
                <span className="font-extrabold text-2xl md:text-4xl">
                  {downloads}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>
                  <img
                    src="/icon-ratings.png"
                    alt="Rating Icon"
                    className="w-10 h-10 mr-2"
                  />
                </span>
                <span className="whitespace-nowrap text-sm sm:text-base">
                  Average Rating
                </span>
                <span className="font-extrabold text-2xl md:text-4xl">
                  {ratingAvg}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span>
                  <img
                    src="/icon-review.png"
                    alt="Reviews Icon"
                    className="w-10 h-10 mr-2"
                  />
                </span>
                <span className="whitespace-nowrap text-sm sm:text-base">
                  Total Reviews
                </span>
                <span className="font-extrabold text-2xl md:text-4xl ">
                  {reviews}
                </span>
              </div>
            </div>
            <div className="mt-3 text-center md:text-left">
              <button
                onClick={installApp}
                disabled={isInstalled}
                className={`text-white p-2 rounded-md transition-colors ${
                  isInstalled
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-400 hover:bg-green-500"
                }`}
              >
                {isInstalled ? "Installed" : `Install Now (${size})`}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-3 py-5 my-4 border-b-2 border-gray-200">
          <h1 className="text-2xl font-semibold">Ratings</h1>
          <div className="h-[200px] md:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" barCategoryGap="20%" data={chartData}>
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" stroke="#000" />
                <Tooltip />
                <Bar dataKey="count" fill="#ff8c00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="space-y-3 py-5 my-4 border-b-2 border-gray-200">
          <h1 className="text-2xl font-semibold">Description</h1>
          <div className="leading-8">{description}</div>
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

export default AppDetail;
