import { React, useEffect,useState} from 'react';
import { Link } from "react-router-dom";
// import Back from '../images2/opoo.png';
import Back from '../images2/bg22.PNG'
import User from "./user";


const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await  fetch("https://ehealthbackend-project.herokuapp.com/api/health/blogs")
      .then((res) => res.json())
      .then((data) => setUsers(data.blogs)) 
  };



  console.log(users);
  return (
    <>
    <section class="page-title text-center" style={{ backgroundImage:`url(${Back})`,marginTop:'-0.4cm'  }}>
    <div class="container">
        <div class="title-text">
            <h1>Blog</h1>
            <ul class="title-menu clearfix">
                <li>
                <Link to="/" class='nav-link' style={{color:'blue',textDecoration:'none'}}><a href="">home &nbsp;/</a></Link>
                </li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
</section>
       <section class="testimonial-section" style={{backgroundColor:'',marginTop:'-0.4cm'}}>
  <div class="container">
    <div class="row">
    <div class="col-lg-1"></div>

        {users.map((user) => (
          <User

            id={user.id}
            key={user.id}
            title={user.title}
            description={user.description}
            file={user.blog_file}

            // onDelete={onDelete}
            // onUpdate={onUpdate} 
          />
          
        ))}
        <br/><br/>
      
      <div class="col-lg-1"></div>
    </div>
  </div>
</section>
    
    </>
  );
};


export default App;