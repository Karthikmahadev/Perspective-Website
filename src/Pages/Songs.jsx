import React, { useEffect } from "react";
import "../Styles/Songs.css";
import useMousePosition from "../Utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fadeIn } from "./variants"; 
import Navbar2 from "../Components/Navbar2";
import Footer from "../Components/Footer";


  

const products = [
  {
    id: 1,
    name: "Mogathirai Reprise",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/48/ef/3e/48ef3e31f4c4f2957aeaf2cf55f0b7aa.jpg",
    imageAlt: "Mogathirai Song",
    price: "2012",
    color: " Pradeep Kumar",
  },
  {
    id: 2,
    name: "Borderline",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/5c/e9/d9/5ce9d9f26ffdcf654b0b7facc032514e.jpg",
    imageAlt: "Borderline.",
    price: "2020",
    color: "Tame Impala",
  },
  {
    id: 3,
    name: "Dune Ost",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/d5/cd/7f/d5cd7f2b5cdb99a9545c1eb443b39eee.jpg",
    imageAlt: "Dune Ost",
    price: "2021",
    color: "Hans Zimmer",
  },
  {
    id: 4,
    name: "Kun Faya Kun",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/a1/f9/bd/a1f9bddf16c5514468c7bff10a8bf1ef.jpg",
    imageAlt: "Kun Faya Kun",
    price: "2011",
    color: " A. R. Rahman",
  },
  {
    id: 5,
    name: "Kanne Kalaimaane",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/56/24/69/562469004dadee77dac985ae298ccc09.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "1982",
    color: "Ilaiyaraaja",
  },
  {
    id: 6,
    name: "The Real Slim Shady",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/e8/78/b0/e878b0c370a228f6634693f430945325.jpg",
    imageAlt: "The Real Slim Shady.",
    price: "2000",
    color: "Eminem",
  },
  {
    id: 7,
    name: "From the Dining Table",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/3a/37/26/3a37263574811bb1992b2c2f7c8ea78e.jpg",
    imageAlt: "From the Dining Table.",
    price: "2017",
    color: "Harry Styles",
  },
  {
    id: 8,
    name: "No Surprises",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/0b/86/d8/0b86d8cb8c9a3b2ab3efa7ab3d51296a.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "1997",
    color: "Radiohead",
  },
  // More products...
];
const Songs = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      {/* <div className="flex justify-center">
        <h1 className="text-center "></h1>
      </div> */}
   <Navbar2 />

<motion.div
variants={fadeIn("up",0.2)}
initial="hidden"
whileInView={"show"}
viewport={{once:false,amount:0.7}}

className="pagediv mt-7">
      <div className="outer-box mt-40 ml-10">
        <div className="inner-box">
          <div className="image" style={{ backgroundImage: "url('after.jpg')" }}>
            {/* <h2 className="firsttextimage">Music</h2> */}
          </div>
          <div className="image1" style={{ backgroundImage: "url('artic.jpg')" }}>
          {/* <h2 className="secondtextimage">Music</h2> */}
          </div>
          <div className="image2" style={{ backgroundImage: "url('pradeep.jpg')" }}>
          {/* <h2 className="thirdtextimage">Music</h2> */}
          </div>
        </div>
      </div>
    </motion.div>

    
<div className="centerpage1 mt-5">
<p className="textpa">In the History of -  Melodic legacy .</p><br></br>
</div>

<motion.div
variants={fadeIn("up",0.5)}
initial="hidden"
whileInView={"show"}
viewport={{once:false,amount:0.7}}
className="centerpage ">
  <h1 className="bigtext">SOUNDS OF SOUL</h1>
</motion.div>
    
      <motion.div
      variants={fadeIn("up",0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.5}}

      className="pagediv2 mt-1">
      <div className="outer-box2 mt-10 ml-10">
        <div className="inner-box2">
          <div className="image4" style={{ backgroundImage: "url('harry.jpg')" }}>
            <h1 className="firsttextimagetext">
            The Essence of <br></br>
            Musical Elegance </h1>
          </div>
          
        </div>
      </div>
    </motion.div>


      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Music :
          </h2>

          <div  className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
              data-aos="fade-left"
               key={product.id} 
               className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a className="product-name" href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="product-color mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="product-price text-sm font-medium text-gray-900">
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

export default Songs;
