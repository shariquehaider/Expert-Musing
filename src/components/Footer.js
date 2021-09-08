import React from "react";
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

function Footer (){
  return(
    <div>
    <div class="footer">
    <a class="but" href="#"><h3>About Us</h3></a>
    <a class="but" href="#service" onClick={Scroll}><h3>Services</h3></a>
    <a class="but" href="#"><h3>Our blogs</h3></a>
    <a class="but" href="#team" onClick={Scroll}><h3>Contact us</h3></a>
    <br/>
    <div class="icons">
      <a class="fb"href="#"><i class="fab fa-facebook fa-3x"></i></a>
      <a class="ig"href="#"><i class="fab fa-instagram fa-3x"></i></a>
      <a class="li" href="#"><i class="fab fa-linkedin fa-3x"></i></a>
      <a class="mail" href="#"><i class="fas fa-envelope fa-3x"></i></a>

    </div>
    <br/>
    <h4 class="copy">©️Expert Musings 2021</h4>
    </div>
    </div>
  )
};

export default Footer;
