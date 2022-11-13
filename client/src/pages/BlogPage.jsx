import React, {useState, useEffect } from "react"
import { BlockBlog } from "../compMy/BlockBlog";
//import { Link } from "react-router-dom";


import './../../src/'



export const BlogPage = () => {
 
 const [posts, setPosts] = useState([]) 


 useEffect(()=> {
   fetch(`https://bezpechni.com/wp-json/wp/v2/posts/`)
  .then(res => res.json())
  .then(data => {setPosts(data);
      }).catch(console.log("Error fetch"))
 
    
 },[]);
    
  return (
    <>
    <h1>Blog Page</h1>
    <div className="flex flex-wrap gap-4 ">
       

       { posts.map(post =>  (
          <BlockBlog  key={post.id} to={`/blog/${post.id}`} title={post.title.rendered} img={"sd"}/>
            
         /*  </BlockBlog>  */
                            ))
       }
    </div>
    </>
  )
}