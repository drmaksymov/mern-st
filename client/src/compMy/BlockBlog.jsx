import React from "react"

//import './App.css'



export const BlockBlog = () => {
    
    
  return (
    <div>
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