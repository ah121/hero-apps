import { Link } from "react-router";
import SingleCard from "../Components/SingleCard";
import Banner from "../Components/Banner";
import Hero from "../Components/Hero";
import Review from "../Components/Review";
import Cardsection from "../Components/Cardsection";
import useApps from "../Hook/useApps";
import Spinner from "../Components/Spinner";

const Home = () => {
  const { apps, loading } = useApps();
  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Banner />
          <Hero />
          <Review />
          <div className="bg-base-200 py-20">
            <Cardsection />
            <div className="max-w-[1440px] mx-auto">
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4 py-10 px-3">
                {featuredApps.map((app) => (
                  <SingleCard app={app} key={app.id} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/apps"
                className="btn bg-gradient-to-r from-purple-600 to-purple-500 text-white"
              >
                Show All
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
