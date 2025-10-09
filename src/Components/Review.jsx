import React from "react";

const Review = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20 gap-10 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Trusted by Millions, Built for You
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center bg-gradient-to-r from-green-400 to-purple-200">
        <div className="space-y-3 text-center lg:px-15">
          <h1>Total Downloads</h1>
          <p className="text-4xl md:text-6xl font-extrabold">29.6M</p>
          <p>21% more than last month</p>
        </div>
        <div className="space-y-3 text-center lg:px-15 bg-gradient-to-r from-purple-600 to-purple-500">
          <h1>Total Reviews</h1>
          <p className="text-4xl md:text-6xl font-extrabold">906K</p>
          <p>46% more than last month</p>
        </div>
        <div className="space-y-3 text-center lg:px-15 bg-gradient-to-r from-purple-600 to-purple-500">
          <h1>Active Apps</h1>
          <p className="text-4xl md:text-6xl font-extrabold">132+</p>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
