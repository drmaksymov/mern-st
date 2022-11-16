import React from "react"

//import './App.css'



export const AuthPage = () => {
    
    
  return (
    <div>
       <h1 className="font">Auth Paged</h1>
       
      {/*  <div className="w-[500px] min-h-[500px] bg-slate-400 p-4 flex  flex-row-reverse items-center space-x-4">
        <div className=" bg-yellow-500 flex h-[80px] w-[80px]  text-white items-center justify-center">1</div>
        <div className="bg-black flex h-[80px] w-[80px]  text-white items-center justify-center">2</div>
        <div className="bg-red-500 flex h-[80px] w-[80px]  text-white items-center justify-center">3</div>
       </div> */}


       <div className="min-h-[600px] bg-slate-300">
         <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 min-h-[300px] sm:min-h-[600px] bg-slate-400 justify-center flex items-center flex-col">
          <h1 className="font-Russo">Сучасна стоматологія в Полтаві</h1>
          <h2>Сучасна стоматологія в Полтаві</h2>
        </div>
        <div className="w-full sm:w-1/2 min-h-[600px] bg-slate-500 ">
          <img className="" src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg' alt="" /></div>
        </div>
       </div>
    </div>
  )
}