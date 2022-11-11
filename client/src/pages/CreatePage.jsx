import React, {useState} from "react"

//import './App.css'
import { HomeBlockPage } from './../compMy/blockComponents/HomeBlockPage';
import { CreateBlock2 } from './../compMy/blockComponents/CreateBlock2';



export const CreatePage = () => {

  const [name1, setName1] = useState("")
  const [name2, senName2] = useState("")
    
  const handleNameInput = (event) => {
      setName1(event.target.value)
  }


 const handleNameInput2 = (name) => {
      senName2(name)
 }
  

  return (
    <div>
      <h1>Create Page</h1>
      
      
      <div className="w-100 bg-slate-500 p-5 m-5">
      <h1>Родитель передає інформацію з інпута</h1>
       <input type="text" className="p-2 m-3 " placeholder="Name" onChange={handleNameInput}/>
       <HomeBlockPage name1={name1}/>
       </div> 












       <div className="w-100 bg-slate-400 p-5 m-5">
      <h1>Children передає інформацію з інпута</h1>
      <h2> Тут буде інфо: {name2} </h2>
       <CreateBlock2 onChange={handleNameInput2}/>
       </div> 


       
    </div>
  )
}