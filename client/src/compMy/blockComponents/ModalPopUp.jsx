import React from "react"


//import './App.css'
import classes from './../styleModule/ModalPopUp.module.css'
import { Link } from 'react-router-dom';



export const ModalPopUp = ({CloseModal}) => {
    
    
  return (
    <div className="transition duration-150 ease-in-out w-full h-full bg-sky-900 fixed top-0  left-0 flex justify-center items-center bg-opacity-40 filter myblur" onClick={CloseModal} >
       
       <div onClick={e => e.stopPropagation()} className="gap-4 p-4 w-[400px] min-h-[350px] bg-white rounded-md flex justify-start flex-col items-center drop-shadow-lg">
       <span className="font-Russo">Записатися на консультацію</span>
       





      

<input  type="email"   id="UserEmail"   placeholder="Email"   className="input"  />
<input  type="text"   id="UserEmail"   placeholder="Name"   className="input"  />

<div className="w-full ">
<label className=""> Дата консультації</label>
<input  type="date"   id="UserEmail"   placeholder="Name"   className="input"  />
</div>


<div className="w-full ">
<label className=""> Дата консультації</label>
<input  type="email"   id="UserEmail"   placeholder="Name"   className="input"  />
</div>
       

<Link
  class="w-full flex justify-center group rounded relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    class=" absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
  ></span>

  <span
    class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Відправити
  </span>
</Link>
       </div>
       
      
      

    </div>
  )
}