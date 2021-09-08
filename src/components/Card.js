import React, {useEffect} from "react";
import Sharique from "./img/Sharique.jpg"
import Ayush from "./img/ayush.jpeg";
import Tilt from 'react-tilt';


function Card(props){


  return(
    <div >
    <div id="team" className="container2">
    <Tilt className="Tilt" options={{ max : 0}}  >
    <div className= {props.class} >
    <div className="circle">
    <div className="imgbox">
    <img src={props.img} />
    </div>
    </div>
    <div className="content">
    <div className="social">
    <a href={props.fb} ><i className="icon fab fa-facebook-square"></i></a><br/>
    <a href={props.insta} ><i className="icon fab fa-instagram"></i></a><br/>
    <a href={props.linkedin} ><i className="icon fab fa-linkedin"></i></a><br/>
    <a href={props.mail} ><i className="icon fas fa-envelope"></i></a>
    </div>
    <div className="Details1">
    <h1>{props.name}</h1>
    <h3>{props.work}</h3>
    <h4>{props.interest}</h4>
    </div>
    </div>
    </div>
    </Tilt>
    </div>
    </div>
  )
};


export default Card;
