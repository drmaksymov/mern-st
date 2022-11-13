import React from "react"
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom"




export const BlockBlog = (props) => {
    
    
  return (
  <div className="w-1/3 sm:w-auto">
  <div key={props.key} className="">
  <div className="flex md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
    <div className="p-6 flex flex-col justify-start">
      <Link to={props.to} className="text-gray-900 text-xl font-medium mb-2">{props.title}</Link>
      <p className="text-gray-700 text-base mb-4">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </p>
      <p className="text-gray-600 text-xs">{props.img}</p>
    </div>
  </div>
</div>
</div>
  )
}