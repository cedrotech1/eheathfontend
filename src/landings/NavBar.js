import React from "react";
import { Link } from "react-router-dom";
import './nav.css'

const NavBar = () => {

  function Display() {
    // document.getElementById("ul").style.display = "block";

    var x = document.getElementById('ul');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
    return ( 
<>
       
  

<div class="header-top" style={{backgroundColor:'#f5f5f5'}}>
  <div class="container">
    <div class="row align-items-center">
    <div class="col-md-6">
        <div class="top-left text-center text-md-left">
          <h6>Opening Hours : 24/24 from Monday to Saturday 7/7 days</h6>
        </div>
      </div>
      <div class="col-md-6">
        <div class="top-right text-center text-md-right">
          <ul class="social-links">
            <li>
              <a href="https://10bc-197-243-89-36.eu.ngrok.io/" aria-label="facebook">
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

<section class="header-uper" style={{position:"",backgroundColor:'honeydew'}}>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl-4 col-lg-3">
        <div class="logo">
         
          <Link to="/hospital_login"> 
            <img loading="lazy" class="img-fluid" src="asset/images/lg2.png" alt="logo" style={{width:'4cm',height:'2cm'}}/>
            </Link>  
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
          <div class="link-btn text-center text-lg-right" >
            <a class="btn-style-one" style={{backgroundColor:'darkblue',textDecoration:'none'}} href='https://10bc-197-243-89-36.eu.ngrok.io/'> LOGIN AS USER</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
<nav class="mynav">
      <input type="checkbox" id="check"/>
      <label for="check" class="checkbtn" onClick={Display}>
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">E-HELTHY</label>
      <ul class='ul' id='ul'>
        <li><Link to="/"><a class="" href="" style={{textDecoration:'none'}}>Home</a></Link></li>
        <li><Link to="/about"><a href="">About</a></Link></li>
        <li><Link to="/service"><a href="">Services</a></Link></li>
        <li><Link to="/blog"><a href="">Blog</a></Link></li>
        <li><Link to="/contact"><a href="">Contact</a></Link></li>
      </ul>
    </nav>
    </section>
    {/* <section></section> */}
<section class="sec">
<nav class="navbar" style={{backgroundColor:'',width:'100%',marginTop:'0.2cm'}}>
  {/* <div class="container">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarLinks">
     <b>
        <ul class="navbar-nav">
          <li class="nav-item">
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
  </div> */}
</nav>
</section>
</>
     );
}
 
export default NavBar;