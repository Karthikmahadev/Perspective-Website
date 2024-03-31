import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  768: { items: 3 },
  1024: { items: 4 },
  1200: { items: 5 },
  1400: { items: 6 },
};

const items = [
  <div className="item" data-value="1">
    <img
      src="https://i.pinimg.com/564x/ed/b7/f6/edb7f69de4261a765933d2bbf9675712.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
   />
  </div>,
  <div className="item" data-value="2">
    <img
      src="https://i.pinimg.com/564x/e8/5b/a6/e85ba698aecffc92da58fd05237ecc14.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="3">
    <img
      src="https://i.pinimg.com/564x/c1/21/23/c12123db52a611c0d6ca8293914a32c7.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="4">
    <img
      src="https://i.pinimg.com/564x/64/a5/f9/64a5f92cf24e2e14aa943080dd21e987.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="5">
    <img
      src="https://i.pinimg.com/564x/3d/bc/cc/3dbccc3c5703074d2fbe44b65e129bb1.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="6">
    <img
      src="https://i.pinimg.com/564x/10/fd/91/10fd9157c3d1ce1998cfb969fecf6be8.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="7">
    <img
      src=" https://i.pinimg.com/564x/47/aa/22/47aa2257616681d344e4a1523fab7040.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="8">
    <img
      src="https://i.pinimg.com/564x/d3/1c/73/d31c7345b0ba63e6864daa784dca9448.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="9">
    <img
      src="https://i.pinimg.com/564x/79/0a/8c/790a8c1d4c81e845be785de3ea10f81a.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="10">
    <img
      src="https://i.pinimg.com/564x/fb/38/8e/fb388e9d77de6870698784a0af933c0e.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="11">
    <img
      src="https://i.pinimg.com/564x/7a/4b/f1/7a4bf164f893af12a4a1ccd499ee01fb.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
  <div className="item" data-value="12">
    <img
      src="https://i.pinimg.com/564x/04/8b/3b/048b3ba619618a821af8fad729bbbdff.jpg"
      style={{ height: "510px", width: "91%", marginLeft: "8%" }}
      alt="something"
    />
  </div>,
];

const Carousel = () => (
  <div className="mt-5">
    <AliceCarousel
      animationType="fadeout"
      animationDuration={800}
      autoPlay
      autoPlayInterval={1000}
      disableButtonsControls
      infinite
      items={items}
      mouseTracking
      responsive={responsive}
      controlsStrategy="alternate"
    />
  </div>
);

export default Carousel;
