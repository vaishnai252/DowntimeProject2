import React from "react";
import AllCategories from "../components/AllCategories";

import Allproducts from "../components/AllProducts";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularTitle from "../components/PopularTitle";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <PopularTitle/>
      <Categories />
      <Allproducts/>
      <AllCategories/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
