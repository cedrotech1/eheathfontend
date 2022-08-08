import Back from '../images2/slider-bg-1.jpg';
const Footer = () => {
    return ( 
        <>
<footer class="footer-main" style={{backgroundColor:'darkslategray'}}>
  <div class="footer-top">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4 mb-5 mb-lg-0">
          <div class="about-widget">
            <div class="footer-logo">
              <figure>
                <a href="index.html">
                  <img loading="lazy" class="img-fluid" src="asset/images/logo-2.png" alt="medic"/>
                </a>
              </figure>
            </div>
            <p>e-helthy head quater center address especially located at kigali city
            to reach us follow bellow address
            </p>
            <ul class="location-link">
              <li class="item">
                <i class="fas fa-map-marker-alt"></i>
                <p>kLab Road 44 KG 548 St Kigali, Rwanda</p>
              </li>
              <li class="item">
                <i class="far fa-envelope" aria-hidden="true"></i>
                <a href="mailto:support@medic.com">
                  <p>admin@klab.rw</p>
                </a>
              </li>
              <li class="item">
                <i class="fas fa-phone" aria-hidden="true"></i>
                <p>0782779773</p>
              </li>
            </ul>
            <ul class="list-inline social-icons">
              <li class="list-inline-item"><a href="https://www.facebook.com/klabrw/" aria-label="facebook"><i class="fab fa-facebook-f"></i></a></li>
              <li class="list-inline-item"><a href="https://twitter.com/klabrw?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" aria-label="twitter"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a href="https://www.instagram.com/accounts/login/?next=/klabrwanda/" aria-label="instagram"><i class="fab fa-instagram"></i></a></li>
             
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-5 mb-3 mb-md-0">
          <h2>Services</h2>
          <ul class="menu-link">
            <li>
              <a href="service.html">
                <i class="fa fa-angle-right" aria-hidden="true"></i>Orthopadic Liabilities</a>
            </li>
            <li>
              <a href="service.html">
                <i class="fa fa-angle-right" aria-hidden="true"></i>Dental Clinic</a>
            </li>
            <li>
              <a href="service.html">
                <i class="fa fa-angle-right" aria-hidden="true"></i>Dormamu Clinic</a>
            </li>
            <li>
              <a href="service.html">
                <i class="fa fa-angle-right" aria-hidden="true"></i>Psycological Clinic</a>
            </li>
            <li>
              <a href="service.html">
                <i class="fa fa-angle-right" aria-hidden="true"></i>Gynaecological Clinic</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-7">
          <div class="social-links">
            <h2>Recent Posts</h2>
            <ul>
              <li class="item">
                <div class="media">
                  <div class="media-left mr-3">
                    <a href="blog-details.html">
                      <img loading="lazy" src="asset/images/blog/post-thumb-small.jpg" alt="post-thumb"/>
                    </a>
                  </div>
                  <div class="media-body">
                    <h5><a href="blog-details.html">A lesson adip isicing</a></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="media">
                  <div class="media-left mr-3">
                    <a href="blog-details.html">
                      <img loading="lazy" src="asset/images/blog/post-thumb-small.jpg" alt="post-thumb"/>
                    </a>
                  </div>
                  <div class="media-body">
                    <h5><a href="blog-details.html">How to make an event</a></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom" style={{backgroundColor:'black'}}>
    <div class="container clearfix">
      <div class="copyright-text">
        <p>&copy; Copyright 2021. Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a></p>
      </div>
      <ul class="footer-bottom-link">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</footer>
        </>
        
    //     <div className="col-md-12 footerx">
    //         <center><i><p class="label">&copy;cedrickhakuzimana@gmail.com  <a href=" "> for more info</a> </p></i> 
    // </center></div>
     );
}
 
export default Footer;