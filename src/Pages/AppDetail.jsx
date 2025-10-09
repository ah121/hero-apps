import { Link, useParams } from "react-router";
import useApps from "../Hook/useApps";
import { BarChart } from "recharts";
import { Bar, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AppDetail = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => a.id === Number(id));
  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || {};
  const chartData = ratings ? [...ratings].reverse() : [];
  return (
    <div className="bg-base-200">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-5 py-5 border-b-2 border-gray-200">
          <figure>
            <img
              src={image}
              alt={title}
              className="h-full w-full object-contain"
            />
          </figure>
          <div className="w-full">
            <div className="border-b-2 border-gray-200 space-y-3">
              <h1 className="font-bold text-4xl">{title}</h1>
              <p className="pb-4">
                Developed by{" "}
                <span className="text-purple-600">{companyName}</span>
              </p>
            </div>
            <div className="flex gap-10 pt-8">
              <div className="flex flex-col gap-2">
                <span>
                  <img
                    src="/icon-downloads.png"
                    alt="Download Icon"
                    className="w-10 h-10 mr-2"
                  />
                </span>
                <span>Downloads</span>
                <span className="font-extrabold text-4xl">{downloads}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>
                  <img
                    src="/icon-ratings.png"
                    alt="Rating Icon"
                    className="w-10 h-10 mr-2"
                  />
                </span>
                <span>Average Rating</span>
                <span className="font-extrabold text-4xl">{ratingAvg}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>
                  <img
                    src="/icon-review.png"
                    alt="Reviews Icon"
                    className="w-10 h-10 mr-2"
                  />
                </span>
                <span>Total Reviews</span>
                <span className="font-extrabold text-4xl">{reviews}</span>
              </div>
            </div>
            <div className="mt-3">
              <Link>
                <button className="bg-green-400 text-white p-2 rounded-md">
                  Install Now ({size})
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3 py-5 my-4 border-b-2 border-gray-200">
          <h1 className="text-2xl font-semibold">Ratings</h1>
          <div className="h-[300px]">
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
    </div>
  );
};

export default AppDetail;
