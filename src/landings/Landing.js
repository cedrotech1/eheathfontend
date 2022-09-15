import React from 'react';
import { Link } from "react-router-dom";
import Back from '../images2/home.PNG';
const Landing = () => {
    return ( 
          <>
          <div class="hero-slider">
  {/* <!-- Slider Item --> */}
  <div class="slider-item slide1" style={{ backgroundImage:`url(${Back})`,marginTop:'-0.4cm' }}>
    <div class="container">
      <div class="row">
        <div class="col-12">
          {/* <!-- Slide Content Start --> */}
          <div class="content style text-center">
            <h2 class="text-white text-bold mb-2" data-animation-in="slideInLeft">WELCOME TO E-HEALTH WEB</h2>
            <p class="tag-text mb-4" data-animation-in="slideInRight">We care our patients by providing necessary information either hospital info or repart about recently Medical report<br/>Your welcome to e-health digitalized information</p>
            <Link to="/about" class='' style={{textDecoration:'none'}}> <a href="about" class="btn btn-main btn-white" data-animation-in="slideInLeft" data-duration-in="1.2">explore</a></Link>
          </div>
          {/* <!-- Slide Content End --> */}
        </div>
      </div>
    </div>
  </div>
 
 
</div>

{/* <!--====  End of Page Slider  ====--> */}
<section class="cta">
  <div class="container">
    <div class="cta-block row no-gutters">
      <div class="col-lg-4 col-md-6 emmergency item">
        <i class="fa fa-phone"></i>
        <h2>Emegency Cases</h2>
        <a href="tel:0782 779 773">0782 779 773</a>
        <p>for specific case you can call that number for specific help</p>
      </div>
      <div class="col-lg-4 col-md-6 top-doctor item">
        <i class="fa fa-stethoscope"></i>
        <h2>24 Hour Service</h2>
        <p>our services is always available as 24/24 hours</p>
        <a href="service.html" class="btn btn-main"><Link to="/about" class=' ' style={{height:'1cm',textDecoration:"none"}}>read more</Link></a>
      </div>
      <div class="col-lg-4 col-md-12 working-time item">
        <i class="fa fa-hourglass-o"></i>
        <h2>users</h2>
        <ul class="w-hours">
          <li>this web is expecially used by same one who registered by receptionist at hospital<br/><br/>
          to login into patient panel require clidentios given by receptionist
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* <!--about section--> */}
<section class="feature-section section bg-gray" style={{marginTop:'-2.5cm'}}>
	<div class="container">
		<div class="row" style={{padding:'1cm'}}>
			<div class="col-lg-12">
				<div class="image-content">
					<div class="section-title text-center">
						<h3>Best Features <span>of Our web </span></h3>
						<p class="mb-0">Lothe main purpose of this web application is to serve information to patient that information  <br/>
            used by different hospitals due to prevenction of westing time <br/>and repertitiveness of information same time miss cominication ...</p>
					</div>

					<div class="row">
						<div class="col-sm-6">
							<div class="item">
								<div class="icon-box">
									<figure>
										<a href="services.html"><img loading="lazy" src="asset/images/resource/1.png" alt="features image"/></a>
									</figure>
								</div>
								<h3 class="mb-2">specific threatment</h3>
								<p> patient will view his report about his treatments from different hospital at different time! 
                  dates report, doctor name ....

                </p>
							</div>
						</div>
						<div class="col-sm-6">
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
						<div class="col-sm-6">
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
						<div class="col-sm-6">
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
		</div>
	</div>
</section>
{/* <!--End about section--> */}


{/* <!--Start about us area--> */}

{/* <!--End about us area--> */}





{/* style="background: url(asset/images/testimonials/1.jpg);" */}

<section class="testimonial-section" style={{backgroundColor:'honeydew'}}>
  <div class="container">
    <div class="row" style={{marginTop:'-2.5cm'}}>
      <div class="col-lg-12">
        <div class="section-title text-center" style={{Color:'black'}}>
          <h3>Main &nbsp;
            <span>web users</span>
          </h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
              {/* <div class="image-box">
                <figure>
                  <img loading="lazy" src="asset/images/testimonials/1.png" alt=""/>
                </figure>
              </div> */}
              <h6>
              <Link to="/service" class='nav-link'>
                     <figure>
                        <img loading="lazy" src="asset/images/resource/x.png" alt="features image" style={{height:'2.6cm',width:'2.6cm',marginTop:'-1.5cm',borderRadius:'100%'}}/>
                      </figure>
                   </Link>
                <b style={{color:'black'}}>patients</b></h6>
              <p class="mb-0"> Our patient is the main web users because of our main purpuser is to digitalize 
              their information to be accessible by both patient and different hospital users in easy way lather 
              using manual way </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="testimonial-carousel">
          {/* <!--Slide Item--> */}
          <div class="slide-item">
            <div class="inner-box text-center">
              {/* <div class="image-box" style={{backgroundColor:'honeydew',border:'3px solid white'}}>
              
              </div> */}
              <h6>
                   <Link to="/service" class='nav-link'>
                     <figure>
                        <img loading="lazy" src="asset/images/resource/x3.png" alt="features image" style={{height:'2.6cm',width:'2.6cm',marginTop:'-1.5cm',borderRadius:'100%'}}/>
                      </figure>
                   </Link>
                  <b style={{color:'black'}}>DIFFERENT HOSPITAL USERS</b></h6>
              <p class="mb-0"> Hospital has many users which will be use this system, 
              users like resepitionist,doctors,.. will have access to add,modify different patient information
              depending each user access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<br/><br/>

          </>
        
     );
}
 
export default Landing;