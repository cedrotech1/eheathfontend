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
         <h5> <Link to="/patientPanel" class='nav-link'> <i class="fas fa-map-marker-alt"></i> &nbsp;&nbsp;HOME</Link></h5>
        </li>
        <li class="nav-item">
          <h5><Link to="/patientSeach" class='nav-link'> <i class="fas fa-map-marker-alt"></i> &nbsp;&nbsp;SEARCH HOSPITAL</Link> </h5>
        </li>
        <li class="nav-item">
          <h5><Link to="/patientGetRep" class='nav-link'> <i class="fas fa-phone" aria-hidden="true"></i>&nbsp;&nbsp; GET REPORTS</Link></h5>
        </li>
        <li class="nav-item">
          <h5><Link to="/patientPassword" class='nav-link'> <i class="fas fa-envelope" aria-hidden="true"></i> &nbsp; &nbsp; EDIT PASSWORD</Link></h5>
        </li>
        <li class="nav-item">
           <h5> <Link to="/patient" class='nav-link'><i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp; LOGOUT</Link></h5>
        </li>
      </ul>
  </div>
        {/* <!-- address end --> */}
      </div>


</>




     );
}
 
export default SideNav;