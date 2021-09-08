/* eslint no-undef: "off"*/
/* global jQuery, padding */


import React,{useEffect} from "react";
import Header from "../components/Header";
import PageDes from "../components/Profile";
import Service from "../components/Service";
import Card from "../components/Card";
import profiles from "../components/profilejson";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";


function Home(){

  useEffect (() =>{
      Aos.init({duration: 2000});
    }, []);

  return (
    <div>
    <Header />
    <PageDes />
    <Service />
    {profiles.map(note =>(
      <Card
        key={note.key}
        class={note.class}
        name={note.name}
        work={note.work}
        interest={note.interest}
        img={note.img}
        fb={note.fb}
        insta={note.insta}
        linkedin={note.linkedin}
        mail={note.mail}
      />
    ))}
    <div className="blogbtn" data-aos="fade-up">
    <a href="https://ayushtejas.github.io/world-of-blogs/" className="btnblog">A World of Blogs</a>
    </div>
    <Footer />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="../js/i.js" />
    </div>
  )
};

export default Home;
