import React from "react"

//import './App.css'



export const ModalPopUp = ({CloseModal}) => {
    
    
  return (
    <div className="transition duration-150 ease-in-out w-full h-full bg-sky-900 fixed top-0  left-0 flex justify-center items-center bg-opacity-40 filter myblur" onClick={CloseModal} >
       
       <div onClick={e => e.stopPropagation()} className="gap-4 p-4 w-[400px] h-[350px] bg-white rounded-md flex justify-start flex-col items-center drop-shadow-lg">
       <span className="font-Russo">Записатися на консультацію</span>
       
       <label
  for="UserEmail"
  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="email"
    id="UserEmail"
    placeholder="Email"
    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
  >
    Email
  </span>
</label>


<label
  for="UserEmail"
  class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <input
    type="email"
    id="UserEmail"
    placeholder="Email"
    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
  >
    Email
  </span>
</label>
       
       </div>
       
      
      

    </div>
  )
}