import React, {useEffect} from "react";
import $, {define, jQuery} from "jquery";
import ScriptTag from 'react-script-tag';
import Tilt from 'react-tilt';
import Aos from "aos";
import "aos/dist/aos.css";

function Service(){

  useEffect (() =>{
      Aos.init({duration: 2000});
    }, []);

  return (
    <div>
    <div id="service" className="container">
    <div className="wrapper">
  <h1>Our Services.</h1>
  <Tilt className="Tilt" options={{ max : 25 }}  >
  <div className="card svg4" data-aos="fade-right">
    <div className="card__content">
      <a className="play-button">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50">
          <path d="M42.7,42.7L25,50L7.3,42.7L0,25L7.3,7.3L25,0l17.7,7.3L50,25L42.7,42.7z" className="polygon"></path>
          <polygon points="32.5,25 21.5,31.4 21.5,18.6 "></polygon>
        </svg>
      </a>
      <div className="card__content--description">
        <h3 className="roll-up">
          <span><span>W</span><span>W</span></span>
          <span><span>e</span><span>e</span></span>
          <span><span>b</span><span>b</span></span>
          <span><span> </span><span> </span></span>
          <span><span>A</span><span>A</span></span>
          <span><span>p</span><span>p</span></span>
          <span><span>p.</span><span>p.</span></span>

        </h3>
        <p className="text-reveal">
          <span>
            <span>Get a Complete Web</span>
            <span>App solution</span>
            <span>That stands Out</span>
          </span>
          <span>
            <span><span>Get a Complete Web</span></span>
            <span><span>App solution</span></span>
            <span><span>That stands Out</span></span>
          </span>
        </p>
      </div>
    </div>
  </div>
  </Tilt>
    <Tilt className="Tilt" options={{ max : 25 }}  >
  <div className="card svg1" data-aos="fade-left">
    <div className="card__content">
      <a className="play-button">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50">
          <path d="M42.7,42.7L25,50L7.3,42.7L0,25L7.3,7.3L25,0l17.7,7.3L50,25L42.7,42.7z" className="polygon"></path>
          <polygon points="32.5,25 21.5,31.4 21.5,18.6 "></polygon>
        </svg>
      </a>
      <div className="card__content--description">
        <h3 className="roll-up">
          <span><span>C</span><span>C</span></span>
          <span><span>r</span><span>r</span></span>
          <span><span>y</span><span>y</span></span>
          <span><span>p</span><span>p</span></span>
          <span><span>t</span><span>t</span></span>
          <span><span>o</span><span>o</span></span>
          <span><span>. </span><span>. </span></span>
        </h3>
        <p className="text-reveal">
          <span>
            <span>A complete guide</span>
            <span>To the crypto world</span>
          </span>
          <span>
            <span><span>A complete guide</span></span>
            <span><span>To the crypto world</span></span>
          </span>
        </p>
      </div>
    </div>
  </div>
  </Tilt>
    <Tilt className="Tilt" options={{ max : 25 }}  >
  <div className="card svg2" data-aos="fade-right">
    <div className="card__content">
      <a className="play-button">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50">
          <path d="M42.7,42.7L25,50L7.3,42.7L0,25L7.3,7.3L25,0l17.7,7.3L50,25L42.7,42.7z" className="polygon"></path>
          <polygon points="32.5,25 21.5,31.4 21.5,18.6 "></polygon>
        </svg>
      </a>
      <div className="card__content--description">
        <h3 className="roll-up">
          <span><span>C</span><span>C</span></span>
          <span><span>o</span><span>o</span></span>
          <span><span>d</span><span>d</span></span>
          <span><span>i</span><span>i</span></span>
          <span><span>n</span><span>n</span></span>
          <span><span>g</span><span>g</span></span>
        </h3>
        <p className="text-reveal">
          <span>
            <span>Start off your career</span>
            <span>In the world of programming</span>
          </span>
          <span>
            <span><span>Start off your career</span></span>
            <span><span>In the world of programming</span></span>
          </span>
        </p>
      </div>
    </div>
  </div>
  </Tilt>
    <Tilt className="Tilt" options={{ max : 25 }}  >
  <div className="card svg3" data-aos="fade-left">
    <div className="card__content">
      <a className="play-button">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50">
          <path d="M42.7,42.7L25,50L7.3,42.7L0,25L7.3,7.3L25,0l17.7,7.3L50,25L42.7,42.7z" className="polygon"></path>
          <polygon points="32.5,25 21.5,31.4 21.5,18.6 "></polygon>
        </svg>
      </a>
      <div className="card__content--description">
        <h3 className="roll-up">
          <span><span>G</span><span>G</span></span>
          <span><span>u</span><span>u</span></span>
          <span><span>i</span><span>i</span></span>
          <span><span>t</span><span>t</span></span>
          <span><span>a</span><span>a</span></span>
          <span><span>r</span><span>r</span></span>
        </h3>
        <p className="text-reveal">
          <span>
            <span>Pursue your music hobby</span>
            <span>Trained by expert musicians</span>
          </span>
          <span>
            <span><span>Pursue your music hobby</span></span>
            <span><span>Trained by expert musicians</span></span>
          </span>
        </p>
      </div>
    </div>
  </div>
  </Tilt>
</div>
    </div>
    </div>
  )
};


export default Service;
