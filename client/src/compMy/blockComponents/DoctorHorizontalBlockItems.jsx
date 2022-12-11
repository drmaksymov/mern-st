import React from "react"
import {motion} from "framer-motion"

import { Link } from "react-router-dom"


//import './App.css'



export const DoctorHorizontalBlockItems = (props) => {
    
    console.log(props)

    const specialty = props.spec;
  return (
    <div>
       
       <motion.div className="inner  h-[300px] min-w-[300px]  flex justify-center items-center flex-col">
              
              <div className="relative p-2">
              <img src={props.src} alt={props.name} className=" image-doc max-h-[250px] min-h-[250px] min-w-[250px] max-w-[250px] grayscale hover:grayscale-0 active:pointer-events-none  bg-center"/>
              
              
              <div className="absolute bottom-0 right-0 flex justify-end flex-col mb-4 gap-2">
                {specialty.map(spec => (
                            <span  className="inline-flex items-center justify-center rounded-full bg-emerald-200 px-2.5 py-0.5 text-emerald-700  mr-4">
                            <p class="whitespace-nowrap text-sm">{spec}</p>
                        </span>
                ))}
                
               </div>







              </div>
              <span  className="d">{props.name}</span>
              <Link to={props.to}><span className="d">Записатися</span>  </Link>                 
        </motion.div>
      
      

    </div>
  )
}