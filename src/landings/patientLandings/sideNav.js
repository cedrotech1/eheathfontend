import React from "react";
import { Link } from "react-router-dom";
const SideNav = () => {
    return ( 
<>
       













<div class="col-lg-3 col-md-12 sideNavbar navbar navbar-expand-lg navbar-dark flex-row" style={{backgroundColor:'honeydew',padding:'1cm',boxShadow: "1px 1px 8px rgb(112, 112, 112)"}}>
        {/* <!-- address start --> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style={{backgroundColor:'paleturquoise',height:'1.5cm',width:'1.5cm'}}></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarLinks">
        <ul class="nav flex-column nav-striped">

            <li class="nav-item">
          <a class="nav-link" href="#"><h5><i class="fas fa-map-marker-alt"></i> <b>&nbsp;&nbsp;<Link to="/patientPanel">HOME</Link> </b></h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><h5><i class="fas fa-map-marker-alt"></i> <b>&nbsp;&nbsp;<Link to="/patientSeach"> SEARCH HOSPITAL</Link> </b></h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <h5><i class="fas fa-phone" aria-hidden="true"></i><b>&nbsp;&nbsp; <Link to="/patientGetRep">  GET REPORTS</Link></b></h5></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><h6><i class="fas fa-envelope" aria-hidden="true"></i><b> &nbsp; &nbsp; <Link to="/patientPassword"> CHANGE PASSWORD</Link></b></h6></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <h5><i class="fas fa-map-marker-alt"></i><b> &nbsp; &nbsp; <Link to="/">LOGOUT</Link></b></h5></a>
        </li>
      </ul>
  </div>
        {/* <!-- address end --> */}
      </div>


</>




     );
}
 
export default SideNav;