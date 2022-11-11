import React from "react"

//import './App.css'



export const CreateBlock2 = ({onChange}) => {
    
  const handleNameInput2 = (event) => {
    onChange(event.target.value)
  }  


  return (
    <div>
       <h1>CreateBlock 2</h1>
       <input type="text" className="p-2 m-3 " placeholder="Name2" onChange={handleNameInput2}/>
    </div>
  )
}