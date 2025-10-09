import { NavLink, useRouteError } from "react-router";
const ErrorPage = () => {
  const error = useRouteError();
  const hasErrorMessage = !!error?.message;
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <figure>
          <img src="/error-404.png" alt="Error" />
        </figure>
        <h2 className="text-2xl font-bold mb-5">
          Oops, {hasErrorMessage ? error?.message : "page not found!"}
        </h2>
        <NavLink to="/">
          <button className="btn bg-gradient-to-r from-purple-600 to-purple-500 text-white">
            Go Back
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
