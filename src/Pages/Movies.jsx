import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Navbar2 from "../Components/Navbar2";
import "../Styles/Movies.css";
const products = [
  {
    id: 1,
    name: "American Psycho",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/6a/e0/75/6ae07585d85dd08be9267a0229d1e749.jpg",
    imageAlt: "American Psycho Book",
    price: "2000",
    color: "Mary Harron",
  },
  {
    id: 2,
    name: "Fight Club",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/89/d3/e0/89d3e07ee3ebbd8a7a56f1e048adf575.jpg",
    imageAlt: "Fight Club Movie.",
    price: "1999",
    color: " David Fincher",
  },
  {
    id: 3,
    name: "Her",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/55/c4/af/55c4afd1d047e258324f0721b3a8d8b7.jpg",
    imageAlt: "Her Movie",
    price: "2014",
    color: "Spike Jonze",
  },
  {
    id: 4,
    name: "Hey Ram",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/fc/86/a1/fc86a197f6e48dfe63bffd1d05e486c5.jpg",
    imageAlt: "Hey Ram Movie.",
    price: "2000",
    color: "Kamal Haasan",
  },
  {
    id: 5,
    name: "The Gentlemen",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/c2/d8/14/c2d814bc400597e3e6aba59cee945cd2.jpg",
    imageAlt: "The Gentlemen Movie    ",
    price: "2019",
    color: "Guy Ritchie",
  },
  {
    id: 6,
    name: "Blade Runner 2049",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/96/c6/64/96c6647da2e24f51b836c625241473ad.jpg",
    imageAlt: "Super Deluxe Movie.",
    price: "2019",
    color: "Denis Villeneuve",
  },
  {
    id: 7,
    name: "Manchester by the Sea",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/c3/a7/24/c3a724f4ebe0f82cbe037f9755433f70.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "2016",
    color: "Kenneth Lonergan",
  },
  {
    id: 8,
    name: "Columbus",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/9c/ac/27/9cac276f07493c04f1738da87c9d66bd.jpg",
    imageAlt: "Columbus  Movie",
    price: "2017",
    color: "Kogonada",
  },
  // More products...
];
const Movies = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>

    <Navbar2 />
      <div className="flex justify-center ">
        <h1 className="text-center mt-28"></h1>
      </div>

 

      <div>
        <Carousel />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      className="textpara">
        <div className="leftsidetext">
          <p className="textdiv">
            <span className="roughttextt">Lights dim</span>
            <span className="roughttextt">hearts race</span>
            <span className="roughttextt">the story unfolds</span>
            <span className="roughttextt">enchanting souls</span>
          </p>
        </div>
        <div className="rightsidetext">
          <h4 className="h1text">Filmic Elegance</h4>
          <p class="textone mt-5">
            In the realm of cinema, beauty transcends mere visuals. It's the
            enchanting dance of light and shadow, the symphony of emotions
            portrayed on the silver screen, and the immersive storytelling that
            captivates our hearts. Each frame is a canvas, painting narratives
            with vibrant hues, evoking laughter, tears, and awe. Through the
            lens of cinema, we explore the depths of human experience,
            celebrating the intricate tapestry of life and the boundless
            creativity of the human spirit.
          </p>

          <h4 className="h1text mt-5">Movie Magic</h4>
          <p class=" textone mt-5">
            In the cinematic world, beauty surpasses the visual realm. It's the
            captivating interplay of light and shadow, the symphony of emotions
            unfurled on the silver screen, and the immersive narratives that
            ensnare our hearts. Every frame is a canvas, weaving stories with
            vivid colors, evoking laughter, tears, and wonder. Through cinema's
            lens, we delve into the depths of human existence, celebrating
            life's intricate tapestry and the limitless creativity of humanity.
          </p>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div id="main">
        <img
          src="https://i.pinimg.com/564x/d6/6e/d0/d66ed0c6d290393a22c1ee424ea8ce83.jpg"
          alt=""
        />
        {/* <h1 id="text">We are content creation tema and we are going to make some cool stuff for your </h1> */}

        <div id="scroll-div">
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
          <h1>cinema</h1>
        </div>
        <div id="scroll-div2">
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
          <h1>Action</h1>
        </div>
        <div id="scroll-div3">
          <h1>Drama</h1>
          <h1>Drama</h1>
          <h1>Drama</h1>
          <h1>Drama</h1>
          <h1>Drama</h1>
          <h1>Drama</h1>
          <h1>Drama</h1>
          <h1>Drama</h1>
          <h1>Drama</h1>

          <h1>Drama</h1>
          <h1>Drama</h1>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="bsdsf text-2xl font-bold tracking-tight text-gray-900">
            Cinema: -{" "}
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
                    <p className=" product-color mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className=" product-price text-sm font-medium text-gray-900">
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

export default Movies;
