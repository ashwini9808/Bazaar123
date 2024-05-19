import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { Link } from "react-router-dom";
import shapes from "../../assets/1u2Cz4-shopping-wonderful-picture-images.png";
import shape3 from "../../assets/shapes3.webp";

function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-r  from-blue-400 -z-50">
        <HeroSection />
        <Filter />
        <ProductCard />
        <div className="animate-bounce  -z-10 top-[85rem] left-[1rem] absolute">
          <img src={shape3} alt="img" />
        </div>
        <div className="animate-bounce -z-10 top-[85rem] right-[1rem] absolute">
          <img src={shape3} alt="img" />
        </div>
        <div className="flex justify-center -mt-10 mb-4">
          <Link to={"/allproducts"}>
            <button className=" bg-gray-300 px-5 py-2 rounded-xl">
              See more
            </button>
          </Link>
        </div>
        <Track />
        <Testimonial />
        <div className="m-50 animate-wiggle relative bottom-[-5rem] left-[10rem] ">
          <img src={shapes} alt="img"  className="self-center animate-marquee"/>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
