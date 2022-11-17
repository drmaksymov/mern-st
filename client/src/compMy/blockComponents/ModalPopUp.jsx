import React from "react"

//import './App.css'



export const ModalPopUp = ({CloseModal}) => {
    
    
  return (
    <div className="transition duration-150 ease-in-out w-full h-full bg-sky-900 fixed top-0  left-0 flex justify-center items-center bg-opacity-40 filter myblur" onClick={CloseModal} >
       
       <div onClick={e => e.stopPropagation()} className=" p-4 w-[400px] h-[350px] bg-white rounded-md flex justify-start flex-col items-center drop-shadow-lg">
       <span className="font-Russo">Записатися на консультацію</span>
       <input type="text" placeholder="Name"></input>
       
       </div>
       
      
      

    </div>
  )
}