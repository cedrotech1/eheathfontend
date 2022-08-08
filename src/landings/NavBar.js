import React from "react";
import { Link } from "react-router-dom";
// import './main.css';
// import './style.css';
// import './subMain.css';
const NavBar = () => {
    return ( 
<>
       
    {/* <section className="header navbar">
       <div className="navbar">
            <table>
               <tr>
                     
                     <td><label id="logo_text"></label></td>
                 </tr>
            </table>
            <ul>

               <li><Link to="/">Home</Link> </li>
                
                <li><Link to="/contact">About</Link> </li>
                 <li><Link to="/About">Contact</Link> </li>
                 <li><Link to="/Todo">To-do</Link> </li>
                 <li><Link to="/Login" id="admin_login">login</Link> </li>
            </ul>
</div>
lavender
</section> */}

<div class="header-top" style={{backgroundColor:'#f5f5f5'}}>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="top-left text-center text-md-left">
          <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
        </div>
      </div>
      <div class="col-md-6">
        <div class="top-right text-center text-md-right">
          <ul class="social-links">
            <li>
              <a href="https://www.facebook.com/cedro.dybala" aria-label="facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/klabrw?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" aria-label="twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://klab.rw/" aria-label="google-plus">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/?next=/klabrwanda/" aria-label="instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://hu.pinterest.com/tegopinterest/klab/" aria-label="pinterest">
                <i class="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
 {/* <!--header top--> */}



{/* <!--Header Upper--> */}
<section class="header-uper" style={{position:"",backgroundColor:'#f8f8ff'}}>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-4 col-lg-3">
        <div class="logo">
          <a href="index.html">
            <img loading="lazy" class="img-fluid" src="asset/images/logo.png" alt="logo"/>
          </a>
        </div>
      </div>
      <div class="col-xl-8 col-lg-9">
        <div class="right-side">
          <ul class="contact-info pl-0 mb-4 mb-md-0">
            <li class="item text-left">
              <div class="icon-box">
                <i class="far fa-envelope"></i>
              </div>
              <strong>Email</strong>
              <br/>
              <a href="admin@klab.rw">
                <span>admin@klab.rw</span>
              </a>
            </li>
            <li class="item text-left">
              <div class="icon-box">
                <i class="fas fa-phone"></i>
              </div>
              <strong>Call Now</strong>
              <br/>
              <span>0782779773</span>
            </li>
          </ul>
          <div class="link-btn text-center text-lg-right">
            <a class="btn-style-one"><Link to="/patient" class='nav-link' style={{color:'blue'}}> LOGIN AS PATIENT</Link></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<nav class="navbar navbar-expand-lg navbar-dark flex-column" style={{backgroundColor:'powderblue'}}>
  <div class="container">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarLinks">
     <b>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link"><Link to="/" class='nav-link' style={{color:'blue',textDecoration:'none'}}>Home</Link></a>
          </li>
          <li class="nav-item @@about">
          <a class="nav-link"><Link to="/about" class='nav-link' style={{color:'blue'}}>About US</Link></a>
          </li>
          <li class="nav-item @@service">
            <a class="nav-link" href="service.html"><Link to="/service" class='nav-link' style={{color:'blue'}}>Service</Link></a>
          </li>
          <li class="nav-item @@about">
          <a class="nav-link"><Link to="/blog" class='nav-link' style={{color:'blue'}}>BLOG</Link></a>
          </li>
          <li class="nav-item @@contact">
            <a class="nav-link" ><Link to="/contact" class='nav-link' style={{color:'blue'}}>Contact US</Link></a>
          </li>
        </ul>
    </b> 
    </div>
  </div>
</nav>

</>




     );
}
 
export default NavBar;