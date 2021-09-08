import React, {useState} from "react";
import $ from "jquery";

function Scroll(){
  $(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
};

function Header() {

  const [switchToggle, setSwitchToggle] = useState(false);

  function ToggleBar (){
    switchToggle ? setSwitchToggle(false) : setSwitchToggle(true);
  }

  return ( <div>
    <div id="head" className="Header">
    <div className="title">
    <a href="/" id="anchor" onClick={Scroll}><h1>ExpertMusing</h1></a>
    </div>
    <div className="anchors">
    <a href="#service" onClick={Scroll}>Services</a>
    <a href="#" onClick={Scroll}>Contact us</a>
    <a href="#team" onClick={Scroll}>Team</a>
    </div>
    <div id="sidebar" className={switchToggle ? "active" : ""} onClick={ToggleBar}>
    <div className="togglebtn">
      <span className="one"/>
      <span className="two"/>
      <span className="three"/>
    </div>
      <ul>
        <li><a href="#head" onClick={Scroll} >Home</a></li>
        <li><a href="#service" onClick={Scroll}>Web Design</a></li>
        <li><a href="#service" onClick={Scroll}>Crypto</a></li>
        <li><a href="#service" onClick={Scroll}>Music</a></li>
      </ul>
      </div>
    </div>
    </div>
  )
};

export default Header;
