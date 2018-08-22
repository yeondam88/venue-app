import React, { Component } from "react";
import Slider from "react-slick";

import slide_one from "../../resources/images/red-velvet-1.jpg";
import slide_two from "../../resources/images/red-velvet-2.jpg";
import slide_three from "../../resources/images/red-velvet-3.jpg";

class Carousel extends Component {
  state = {
    settings: {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500
    }
  };

  render() {
    return (
      <div
        className="carrousel_wrapper"
        style={{ overflow: "hidden", height: `${window.innerHeight}px` }}
      >
        <Slider {...this.state.settings}>
          <div>
            <div
              className="carrousel_image"
              style={{
                background: `url(${slide_one})`,
                height: `${window.innerHeight}px`
              }}
            />
          </div>
          <div>
            <div
              className="carrousel_image"
              style={{
                background: `url(${slide_two})`,
                height: `${window.innerHeight}px`
              }}
            />
          </div>
          <div>
            <div
              className="carrousel_image"
              style={{
                background: `url(${slide_three})`,
                height: `${window.innerHeight}px`
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
