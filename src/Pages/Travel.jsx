import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../Styles/Pages.css";
import {motion} from 'framer-motion'
import covervid from "../Assets/videoplayback.webm";
import Footer from "../Components/Footer";
import Navbar2 from "../Components/Navbar2";
const products = [
  {
    id: 1,
    name: "Machu Picchu",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "",
    color: "Peru",
  },
  {
    id: 2,
    name: "Faroe Islands",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1554610975-1fa324cfb60b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "",
    color: "Denmark",
  },
  {
    id: 3,
    name: "Meghalaya",
    href: "#",
    imageSrc:
      "https://www.thomascook.in/blog/wp-content/uploads/2018/04/1280px-Living_root_bridges_Nongriat_village_Meghalaya2-e1523596889566.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "",
    color: "India",
  },
  {
    id: 4,
    name: "Sahara",
    href: "#",
    imageSrc:
      "https://www.joinmytrip.com/blog/wp-content/uploads/2022/07/1_eugene-ga-ZplOYqHxk4o-unsplash.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "",
    color: "Africa",
  },
  {
    id: 5,
    name: "Antelope Canyon",
    href: "#",
    imageSrc:
      "https://www.joinmytrip.com/blog/wp-content/uploads/2022/07/1_fallon-michael-B3xeho4YEVI-unsplash.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "",
    color: "USA",
  },
  {
    id: 6,
    name: "Kerala",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "",
    color: "India",
  },
  {
    id: 7,
    name: "Niagara Falls",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1489447068241-b3490214e879?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "",
    color: "Canada",
  },
  {
    id: 8,
    name: "Palawan",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1531761535209-180857e963b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "",
    color: "Phillipines",
  },
  // More products...
];
const Travel = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <Navbar2 />
      <br></br>
      <br></br>
      <br></br>

      <div id="main1 ">
        <div id="page1">
          <motion.h1
          initial={{x:-1500}}
          animate={{x:0}}
          transition={{delay:1,duration:3}}
          className="Explore"
          >
            Explore <br></br> the world
          </motion.h1>
          <motion.div
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:1}}
            id="video-container">
            <video loop autoPlay muted>
              <source src={covervid} type="video/webm" />
            </video>
          </motion.div>
        </div>
      </div>

      <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 100
      }}
       className="textpara2">
        <div className="leftsidetext2">
          <p data-aos="zoom-out-up"
          className="textdiv2 mt-20">
            <span  className="roughttextt2">Wanderlust.Expedition</span>
            <span className="roughttextt2">Immersive Exploration</span>
          </p>
        </div>
        <div data-aos="zoom-out-up" className="rightsidetext2  mt-20">
          <h4 className="h1text2">Nomadic Grace</h4>
        </div>
      </motion.div>

      <hr className="line mt-10 ml-14 " />

      <motion.div
       initial={{ scale: 0 }}
       animate={{ rotate: 0, scale: 1 }}
       transition={{
         type: "spring",
         stiffness: 260,
         damping: 100
       }} className="centertext">
        <p data-aos="zoom-out-up" className=" centpara mt-6">
        <span className="roughttextt24 ml-24">Embark on a journey through the tapestry of the  world,</span>
        <span className="roughttextt2">  where each destination unveils a new chapter of beauty and</span>
        <span className="roughttextt2"> wonder. Traveling is not just about visiting places..</span>
        <span className="roughttextt2"> It's about immersing oneself in diverse cultures,savoring</span>
          <span className="roughttextt2">  unique flavors, and embracing the rhythm of life in distant lands</span>
          
        </p>
      </motion.div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="kbvbv text-2xl font-bold tracking-tight text-gray-900">
            Travel
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} 
              data-aos="fade-left"
              className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="imagesibv h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a className="product-name" href={product.href}>
                        <span aria-hidden="true" className=" absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className=" product-color mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Travel;



/*'





*/