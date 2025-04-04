import React from "react";

const HeroSection = () => {
  let subscribed = false;
  return (
    <div className="h-screen bg-green-300 ">
      {subscribed && (
        <h1 className="text-8xl text-center">
          Click here to visit our Premium Store
        </h1>
      )}
    </div>
  );
};

export default HeroSection;
