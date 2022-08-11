import React from 'react';
import Back from '../images2/3.jpg'
// import NavBar from "./NavBar";

// import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
const Service = () => {
    return ( 
          <>
          <section class="page-title text-center" style={{ backgroundImage:`url(${Back})` }}>
    <div class="container">
        <div class="title-text">
            <h1>service</h1>
            <ul class="title-menu clearfix">
                <li>
                    <a href="index.html">home &nbsp;/</a>
                </li>
                <li>service</li>
            </ul>
        </div>
    </div>
</section>



<section class="testimonial-section" style={{backgroundColor:'white'}}>
  <div class="container">
    <div class="row" style={{marginTop:'-1.5cm'}}>
      <div class="col-lg-12">
        <div class="section-title text-center" style={{Color:'black'}}>
          <h4>DIFFERNT 
            <span> WEB SERVICES</span>
          </h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
            <div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html"><img loading="lazy" src="asset/images/resource/1.png" alt="features image"/></a>
									</figure>
								</div>
								<h3 class="mb-2">specific threatment</h3>
								<p> patient will view his report about his treatments from different hospital at different time! 
                  dates report, doctor name who make operation and other related report

                </p>
							</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
             
            <div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html">
											<img loading="lazy" src="asset/images/resource/4.png" alt="features image"/>
										</a>
									</figure>
								</div>
								<h3 class="mb-2">General Treatment</h3>
								<p>in this feature general tratment patient will have access to view his information like blood type 
                  current weigth, height , fever , blood speed...
                </p>
							</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
            <div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html">
											<img loading="lazy" src="asset/images/resource/2.png" alt="features image"/>
										</a>
									</figure>
								</div>
								<h3 class="mb-2">testes</h3>
								<p>patient have accesss to view testes hospital made for him/her and  dates ! this information can help doctors next time 
                  patient need treatments </p>
							</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
            <div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html">
											<img loading="lazy" src="asset/images/resource/3.png" alt="features image"/>
										</a>
									</figure>
								</div>
								<h3 class="mb-2">MEDICAL CARE</h3>
								<p> patient have access to view his/her medecine for his text result if it is positive
                  and view information about that medecines like expired date and manufactured date 
                  and catalog of that medecine
                </p>
							</div>
            </div>
          </div>
        </div>
      </div>







    </div>
  </div>
</section>


          </>
        
     );
}
 
export default Service;