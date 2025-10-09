import { Link } from "react-router";
const SingleCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="flex flex-col gap-3">
          <figure>
            <img
              src={app.image}
              alt={app.title}
              className="h-full w-full object-contain"
            />
          </figure>
          <h1 className="font-medium">{app.title}</h1>
          <div className="flex justify-between">
            <div className="flex items-center bg-base-300 px-3 rounded-md text-green-500">
              <span>
                <img
                  src="/icon-downloads.png"
                  alt="Download Icon"
                  className="w-4 h-4 mr-2"
                />
              </span>
              <span>{app.downloads}</span>
            </div>
            <div className="flex items-center bg-base-300 px-3 rounded-md text-orange-400">
              <span>
                <img
                  src="/icon-ratings.png"
                  alt="Download Icon"
                  className="w-4 h-4 mr-2"
                />
              </span>
              <span>{app.ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
