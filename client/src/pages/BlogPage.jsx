import React, {useState, useEffect } from "react"
import { Link } from "react-router-dom";

//import './App.css'



export const BlogPage = () => {
 
 const [posts, setPosts] = useState([]) 


 useEffect(()=> {
   fetch(`https://bezpechni.com/wp-json/wp/v2/posts/`)
  .then(res => res.json())
  .then(data => {setPosts(data)
      }).catch(console.log("Error fetch blog"))
 
    
 },[]);
    
  return (
    <div>
       <h1>Blog Page</h1>

       { posts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} >
            <li>{post.title.rendered}</li>
          </Link>
        )

        )
       }
    </div>
  )
}