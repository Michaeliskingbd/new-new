import React, { lazy, Suspense } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HeroSection from "../component/HeroSection";
const Card = lazy(() => import("../component/Card"));

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="flex gap-3 mt-5">
        <Suspense fallback={<p>Loading....</p>}>
          <Card />
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
