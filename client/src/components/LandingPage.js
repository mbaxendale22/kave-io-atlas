import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 mt-12">
      <p className="text-light text-6xl sm:text-8xl font-Roboto">KAVE.IO</p>
      <div className="flex text-light text-base sm:text-lg font-Montserrat">
        <p>
          <span className="text-contrast">Find</span> Coffees You Love
        </p>
        <p className="transform translate-y-12">
          <span className="text-contrast">Use</span> Your Personal Coffee
          Journal
        </p>
        <p className="transform translate-y-28 sm:translate-y-24">
          <span className="text-contrast">Share</span> Your Recommendations with
          Others
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
