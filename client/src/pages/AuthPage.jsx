import React, {useState, useRef, useEffect} from "react"
import { DoctorHorizontalBlock } from "../compMy/blockComponents/DoctorHorizontalBlock"

//import './App.css'
import { CallToActionHeader } from './../compMy/blockComponents/CallToActionHeader';



export const AuthPage = () => {
    
 

  /* console.log(carusel.current.AuthPage) */


  return (
    <div>
      {/*  <h1 className="font">Auth Paged</h1> */}
       
      {/*  <div className="w-[500px] min-h-[500px] bg-slate-400 p-4 flex  flex-row-reverse items-center space-x-4">
        <div className=" bg-yellow-500 flex h-[80px] w-[80px]  text-white items-center justify-center">1</div>
        <div className="bg-black flex h-[80px] w-[80px]  text-white items-center justify-center">2</div>
        <div className="bg-red-500 flex h-[80px] w-[80px]  text-white items-center justify-center">3</div>
       </div> */}


       <div className="min-h-[600px] bg-slate-300">
         <div className="container  flex flex-col sm:flex-row">
        <div className=" p-4 w-full sm:w-1/2 min-h-[350px] sm:min-h-[600px] justify-center flex items-center flex-col">
          <h1 className="font-Russo text-5xl text-orange-700 ">Довіра</h1>
         <h2 className="font-Russo text-2xl mt-5 ">Сучасна стоматологія  в Полтаві</h2>
         <div className="">
          <div className="flex flex-row gap-4 border-b-2 border-gray-800 p-3"><span className="text-2xl flex items-center font-black">01</span><span className="flex items-center">Sign up in a few minutes</span></div>
          <div className="flex flex-row gap-4 border-b-2 border-gray-800 p-3"><span className="text-2xl flex items-center font-black">02</span><span className="flex items-center">Migrate episodes with a few click</span></div>
          <div className="flex flex-row gap-4  p-3"><span className="text-2xl flex items-center font-black">03</span><span className="flex items-center">Your account is open; you can start recording and leveraging our platform</span></div>
          
         </div>
          <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Hover me
</button>
        </div>
        <div style={{backgroundImage: `url(https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg)`}} className=" bg-no-repeat bg-cover  w-full sm:w-1/2 min-h-[300px] sm:min-h-[600px]          bg-slate-500  "  >
        
               <div className="w-full h-full   bg-gradient-to-r from-slate-300   "></div>
          
              
            </div>
        </div>
       </div>



       {/* Слайдер  */}

       <DoctorHorizontalBlock/>
       <CallToActionHeader/>


    </div>
  )
}