import React from "react";
import picture1 from "../assets/p (1).jpg";

const Learn2 = () => {
  return (
    <section>
      <div className="flex lg:flex-row-reverse flex-col py-[50px] lg:px-20 px-2 gap-5">
        <div className="flex flex-col gap-[40px]">
          <h1 className="text-5xl font-bold  text-center">
            Learn More About <br /> Our
            <span className="text-yellow-500"> Mission</span>
          </h1>
          <p className="lg:w-[100%] w-full lg:text-center ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            tempore, eveniet fugiat atque veniam consequatur, ratione eligendi
            perferendis eos dicta perspiciatis quod unde beatae deserunt et
            corporis velit vel. Vitae.
          </p>
        </div>
        <div className="">
          <img
            className="lg:w-[700px] w-[400px]"
            src={picture1}
            alt="picture"
          />
        </div>
      </div>
    </section>
  );
};

export default Learn2;
