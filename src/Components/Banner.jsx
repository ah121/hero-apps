import React from "react";

const Banner = () => {
  return (
    <div className="py-10 space-y-10 bg-base-200">
      <div className="flex flex-col text-center items-center gap-5">
        <h1 className="text-5xl font-bold">
          We Build <br />
          <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-center text-gray-400">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="hidden lg:block" /> Our goal is to turn your ideas into
          digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <div>
          <a
            href="https://play.google.com/store/games?hl=en&pli=1"
            target="_blank"
            className="btn  to-purple-500"
          >
            <span className="mr-1">
              <img
                src="/google-play.png"
                alt="Google Logo"
                className="w-5 h-5"
              />
            </span>
            Google Play
          </a>
        </div>
        <div>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="btn  to-purple-500"
          >
            <span className="mr-1">
              <img src="/app-store.png" alt="Google Logo" className="w-5 h-5" />
            </span>
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
