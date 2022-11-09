import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
/* import { Link } from "react-router-dom" */

//import './App.css'




export const SinglePage = () => {

const {id} = useParams();
const [post, setPost] = useState(null);
const [html, setHtml] = useState(null);

const navigate = useNavigate();
const goBack = () => navigate(-1);

useEffect(()=> {
  fetch(`https://bezpechni.com/wp-json/wp/v2/posts/${id}`)
 .then(res => res.json())
 .then(data => {setPost(data);
     }).catch(console.log("Error fetch"))

   
},[id]);
  

function ConvertStringToHTML (str) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};
const text = ConvertStringToHTML(post.content.rendered);

useEffect (
  (str) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  },
    
  
   [id]
)
//


  return (
    <div>
      <button onClick={goBack}>D</button>

      {post && (
      <>
      <h1>{post.title.rendered}</h1>
       <div>{html}dsdf</div>
       </>
       )
       }
      
             
    </div>
  )
}