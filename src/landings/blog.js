import { React, useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import Back from '../images2/3.jpg'

// https://ehealthbackend-project.herokuapp.com/api/health/blogs
// import AddUser from "./addUser";
import User from "./user";
//import axios  from "axios";

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

//   await  axios.get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => setUsers(data))
//   .catch((err) => {
//     console.log(err);
//   });
// };

//   const onAdd = async (name, email) => {
//     await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       body: JSON.stringify({
//         name: name,
//         email: email,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((res) => {
//         if (res.status !== 201) {
//           return;
//         } else {
//           return res.json();
//         }
//       })
//       .then((data) => {
//         setUsers((users) => [...users, data]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const onDelete = async (id) => {
//     await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => {
//         if (res.status !== 200) {
//           return;
//         } else {
//           setUsers(
//             users.filter((user) => {
//               return user.id !== id;
//             })
//           );
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const onUpdate = async (id,name,email) => {
    
//       // alert(name)
//       alert(id)
//       // alert(email)
// // return('');
    
//   };

  console.log(users);
  return (
    <>
    <section class="page-title text-center" style={{ backgroundImage:`url(${Back})`,marginTop:'-0.54cm'  }}>
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