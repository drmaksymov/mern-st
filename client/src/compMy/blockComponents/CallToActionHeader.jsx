import React from "react"
import stomatmain3 from "../../img/stomatmain3.png"
//import './App.css'




export const CallToActionHeader = () => {
    
    
  return (
    <div className="parent">
       <div className="div1 gridBlock">
           
       </div>
       <div className="div2 gridBlock">
       <div className="">
          <div className="flex flex-row gap-4 border-b-2 border-gray-800 p-3"><span className="text-2xl flex items-center font-black">01</span><span className="flex items-center">Sign up in a few minutes</span></div>
          <div className="flex flex-row gap-4 border-b-2 border-gray-800 p-3"><span className="text-2xl flex items-center font-black">02</span><span className="flex items-center">Migrate episodes with a few click</span></div>
          <div className="flex flex-row gap-4  p-3"><span className="text-2xl flex items-center font-black">03</span><span className="flex items-center">Your account is open; you can start recording and leveraging our platform</span></div>
          
         </div>
       </div>
       <div className="div3 gridBlock"></div>
       <div className="div4 gridBlock"> 
            <img src={stomatmain3}/>
        </div>
       <div className="div5 gridBlock"> 
       <span className="font-Russo">Останні відгуки</span>
       <span>"Останні відгуки"</span>
       </div>
        <div className="div6 gridBlock">

       </div> 
     
    </div>
  )
}