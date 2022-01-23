import React from "react";
import Nav from "./Nav";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-3/4 justify-center items-center gap-12">
      <p className="text-light text-8xl font-Roboto">KAVE.IO</p>
      <div className="flex text-light text-lg font-Montserrat">
        <p>
          <span className="text-contrast">Find</span> Coffees You Love
        </p>
        <p className="transform translate-y-8">
          <span className="text-contrast">Use</span> Your Personal Coffee
          Journal
        </p>
        <p className="transform translate-y-16">
          <span className="text-contrast">Share</span> Your Recommendations with
          Others
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
