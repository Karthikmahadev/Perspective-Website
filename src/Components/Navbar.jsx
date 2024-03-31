import React from "react";
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <div className="fixed x-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className="logo">
        <div className="logo-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 256 256">
            <defs>
              <linearGradient id="logosInk0" x1="38.264%" x2="58.004%" y1="9.702%" y2="40.206%">
                <stop offset="0%" stop-color="#db221a" />
                <stop offset="100%" stop-color="#9e020b" />
              </linearGradient>
              <linearGradient id="logosInk1" x1="0%" x2="59.127%" y1="58.373%" y2="44.552%">
                <stop offset="0%" stop-color="#87d152" />
                <stop offset="100%" stop-color="#5ca82c" />
              </linearGradient>
              <linearGradient id="logosInk2" x1="55.987%" x2="47.766%" y1="94.205%" y2="50%">
                <stop offset="0%" stop-color="#39be90" />
                <stop offset="100%" stop-color="#2c8a72" />
              </linearGradient>
            </defs>
            <path fill="url(#logosInk0)" d="m25.549 25.331l1.123 4.457l41.545 41.77L110.66 28.89l.344-3.559z" />
            <path fill="#f6b937" d="m68.131 67.84l-.663 2.595l23.206 96.788l39.524-39.523l-59.286-59.511z" />
            <path fill="#ffd500" d="m185.89 67.59l40.422-40.572l4.357-1.251v84.192l-3.458-.449z" />
            <path fill="#fff67d" d="m136.189 0l94.48 25.767l-42.29 41.854l-8.907 4.805l-80.85 20.64l-7.142-1.869L68.131 67.84z" />
            <path fill="#5acda5" d="m188.379 67.621l-3.387 1.616l-21.259 20.66l.48 1.89l-.63 2.751l22.457 89.828l1.902 3.139l.194 2.25l39.524 39.374l2.936 1.031L256 135.388z" />
            <path fill="url(#logosInk1)" d="M25.913 145.433v84.872l5.026-1.101l41.32-41.917l-43.341-40.948z" />
            <path fill="#afe682" d="m25.913 230.305l42.436-43.018l3.91-1.986l92.297-22.906l23.386 25.11l-1.041 2.4l-37.391 38.738l-3.504 1.436l-25.03 25.411z" />
            <path fill="#7dd769" d="m164.213 91.787l-3.362 1.891l-32.113 31.551l-.629 2.662l59.833 59.614z" />
            <path fill="#aadc50" d="m188.379 67.621l-60.27 60.27L91.48 91.197z" />
            <path fill="url(#logosInk2)" d="m146.088 230.16l41.854-42.655l42.654 42.655z" />
            <path fill="#dc4b1e" d="m0 120.248l68.349 67.039l3.236-1.761l20.773-18.078l-.789-3.235L68.131 67.84L25.549 25.331z" />
            <path fill="#aabe55" d="m68.349 187.287l59.76-59.396l36.395 36.249z" />
          </svg>
          
        </div>
      </div>
      <div className="navlinks links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-lg capitalize font-normal ${index === 0 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
