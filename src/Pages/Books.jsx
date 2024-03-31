import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
import Navbar2 from "../Components/Navbar2";
import "../Styles/Pages.css";
const products = [
  {
    id: 1,
    name: "Animal Farm",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/72/5a/d9/725ad99dabb86f557bf68ffd0895dac1.jpg",
    imageAlt: "Animal Farm Book.",
    price: "1945",
    color: "George Orwell",
  },
  {
    id: 2,
    name: "The Metamorphosis",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/5a/93/a8/5a93a88add9c99e24993791840137e03.jpg",
    imageAlt: "The Metamorphosis Book",
    price: "1915",
    color: "Franz Kafka",
  },
  {
    id: 3,
    name: "Nineteen Eighty-Four",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/736x/17/fb/e1/17fbe1b3096863d5af032ce42c80c79c.jpg",
    imageAlt: "Nineteen Eighty-Four Book",
    price: "1949",
    color: "George Orwell",
  },
  {
    id: 4,
    name: "The Alchemist",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/736x/a2/f1/ac/a2f1ac4c7001cb25f2d6fbbc33e79e48.jpg",
    imageAlt: "The Alchemist Book.",
    price: "1988",
    color: " Paulo Coelho",
  },
  {
    id: 5,
    name: "Moby-Dick",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/5f/b6/47/5fb6472af7b1b865255aad3125961966.jpg",
    imageAlt: "Moby-Dick Book.",
    price: "1851",
    color: "Herman Melville",
  },
  {
    id: 6,
    name: "The Catcher in the Rye",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/59/7f/b4/597fb48556f2d63ae86cb49197d0b477.jpg",
    imageAlt: "The Catcher in the Rye Book.",
    price: "1951",
    color: "J. D. Salinger",
  },
  {
    id: 7,
    name: "Life of Pi",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/fe/ff/aa/feffaab5d52ae9753d30d05ea6698f7b.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "2001",
    color: "Yann Martel",
  },
  {
    id: 8,
    name: "Norwegian Wood",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/76/ac/3f/76ac3f7f7d7a22898e700c4d9062782c.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "1987",
    color: "Haruki Murakami",
  },
  // More products...
];

const Books = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar2 />

      <div className="flex justify-between">
        <h1 className=" hii mt-32">.</h1>
      </div>

      <div class="flex flex-row">
        <div class="bib1 basis-9/12 ml-20 text-6xl">Bibliophile </div>
        {/* <div class="bib1 text-5xl"> - Book</div> */}
      </div>

      <div className="contained mt-5">
        <div className="child5"></div>
        <div className="child6">
          <h1 className="centeree">Read.</h1>
          <p className="centereddd">Feast your eyes on a decent book!</p>
          <p className="centereddedd">
            “History will be kind to me for I intend to write it.” ― Winston S.
            Churchill
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>

      <div className="new-contained">
        <div className="new-child5"></div>
        <div className="new-child6">
          <h1 className="new-centeree">Think.</h1>
          <p className="new-centereddd">Free your imagination !</p>
          <p className="new-centereddedd">
            “It is remarkable, the character of the pleasure we derive from the
            best books.” – Ralph Waldo Emerson, Self-Reliance and Other Essays
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="famous text-2xl font-bold tracking-tight text-gray-900">
            Favorite : -{" "}
          </h2>

          <div className="mt-11 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                data-aos="fade-left"
                className="group relative"
              >
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
                        <span
                          aria-hidden="true"
                          className="product-name absolute inset-0"
                        />
                        {product.name}
                      </a>
                    </h3>
                    <p className=" product-color mt-1 text-sm text-gray-500">
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

export default Books;
