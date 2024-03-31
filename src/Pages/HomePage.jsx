import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/HomePage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Moviediv from "../Components/Moviediv";

import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/Footer";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar2 />
      <div>
        <div className="w-full h-screen pt-1">
          <div className="textstructure mt-52 px-20">
            {[
              "Perspective: Where pixels meet poetry,",
              "intertwining to illuminate the extraordinary ",
              "hues of life's ever-unfolding narrative.",
            ].map((item, index) => {
              return (
                <div className="masker" key={index}>
                  <div className="w-fit flex overflow-hidden ">
                    {index === 3 && (
                      <div className="highed w-[9vw] h-[6vw] "></div>
                    )}
                    <motion.h1
                      className="headingtext flex items-center  text-[3vw]  leading-[4vw] tracking-tight ml-10 text-slate-950   font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      {item}
                    </motion.h1>
                  </div>
                </div>
              );
            })}
          </div>
          <motion.div
            className="flex flex-row justify-center items-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div
              data-aos="fade-left"
              className="box w-2/5 cursor-pointer h-1/4 flex flex-col items-center"
            >
              <img
                className="imagehigh w-full"
                src="https://images.unsplash.com/photo-1568607689150-17e625c1586e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imagejbb 1"
              />
              <h1 className="ti textleft  text-2xl">
                &#x2022; Northern Lights
              </h1>
              <p className=" textleft text-base ">Aurora Borealis</p>
            </div>

            <div
              data-aos="fade-left"
              className="box w-2/5 cursor-pointer h-1/4 flex flex-col items-center"
            >
              <img
                className="imagehigh2 w-full"
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imagemhv 2"
              />
              <h1 className="ti23 textleft text-2xl ">
                &#x2022; Frankfurt, Germany
              </h1>
              <p className=" textleft text-base ">Spectacular Architecture</p>
            </div>
          </motion.div>
        </div>

        <Moviediv />

        <div className="sectione-1 boxe"></div>

        <div class="random">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            class="flex flex-col items-center"
          >
            <h1 class="text-center headingtext1 mt-12 text-6xl">
              Perspective.
            </h1>
            <p class="ptext w-2/4 mt-11 text-center text-base">
              We believe in exploring diverse perspectives. Each of our
              favorites represents a unique viewpoint that we aim to share
              through our eyes
            </p>
          </div>

          <div
            data-aos="fade-right"
            class="lineimages flex justify-center mt-16 gap-10"
          >
            <img src="/svg2.svg" alt="Explore Icon" class="icon2" />
            <img src="/svg3.svg" alt="Explore Icon" class="icon2" />
            <img src="/svg6.svg" alt="Explore Icon" class="icon2" />
            <img src="/svg4.svg" alt="Explore Icon" class="icon2" />
            <img src="/svg5.svg" alt="Explore Icon" class="icon2" />
            {/* <LocalDiningIcon class="icon" />
  <SportsSoccerIcon class="icon" />
  <LandscapeIcon class="icon" />
  <FitnessCenterIcon class="icon" /> */}
          </div>
          <div data-aos="fade-right" class="ptextdivifd flex ml-52 mt-8 gap-64">
            <h1 className="ptext ">Explore</h1>
            <h1 className="ptext">Sports</h1>
            <h1 className="ptext">MindfullNess</h1>
            <h1 className="ptext">Food</h1>
            <h1 className="ptext">Nature</h1>
          </div>

          <div data-aos="fade-right" class="flex flex-col items-center">
            <p class="ptext w-2/4 mt-16 text-center text-sm leading-7 ">
              Be good to the world, see life through different perspectives.
              Explore the thrilling world of adventure and discovery. Dive into
              the excitement of sports and feel the adrenaline rush. Embrace
              mindfulness and find inner peace amidst life's chaos. Delight your
              senses with the diverse flavors and aromas of food from around the
              globe.
            </p>

            <p class="ptext vjmgvjjvh w-2/4 mt-11 text-center  text-sm leading-7 ">
              Connect with the beauty and serenity of nature, where every moment
              is a revelation. Let creativity guide your journey as you explore
              these topics, each offering a unique lens through which to view
              the world. Indulge in the richness of experiences and discover new
              horizons. This is your space to dive into the depths of
              exploration and share your passions with the world."
            </p>
            <Link to="/travel">
              <button class="btn mt-10">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
