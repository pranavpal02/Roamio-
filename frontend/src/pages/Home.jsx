import React from "react";
import Header from "../components/Header";
import ExpertiseMenu from "../components/ExpertiseMenu";
import TopTourGuides from "../components/TopTourGuides";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <ExpertiseMenu />
      <TopTourGuides />
      <Banner />
    </div>
  );
};

export default Home;
