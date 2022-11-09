import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
/* import { Link } from "react-router-dom" */





export const SinglePage = () => {

const {id} = useParams();
const [post, setPost] = useState(null);

const navigate = useNavigate();
const goBack = () => navigate(-1);

useEffect(()=> {
  fetch(`https://bezpechni.com/wp-json/wp/v2/posts/${id}`)
 .then(res => res.json())
 .then(data => {setPost(data);
     }).catch(console.log("Error fetch"))

   
},[id]);
  

console.log();

  return (
    <div>
      <button  onClick={goBack}
  class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  Назад
</button>
      

      {post && (
      <>
      <h1>{post.title.rendered}</h1>
      <p dangerouslySetInnerHTML= {{__html: ` ${post.content.rendered}`}}></p>
       </>
       )
       }
             
    </div>
  )
}