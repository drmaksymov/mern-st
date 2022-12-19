import React, {useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ServiseBlock } from "../compMy/blockComponents/ServiseBlock"
//import './App.css'



export const ServiceSingle = () => {
   
    const {id} = useParams()
    const [service, setService] = useState([])


    const URL_SERVICE_ID = `http://localhost:3001/service/${id}`

    useEffect( () => {
        fetch(URL_SERVICE_ID)
        .then(res => res.json())
        .then(data => setService(data))
        .catch(console.log("Error Service"))
    }, [])
    
  return (
    <div className="container mx-auto sm:w-[1200px] mt-4">
     


       <div className="flex flex-col sm:flex-row justify-between gap-8">
       <div className="ml-10 mt-10 flex gap-4 flex-col">
          <h1 className="font-Russo text-3xl ">{service.title}</h1>
          <div className="">    
        </div>
        <p> {service.description} </p>
        </div>
        <img  src={service.imgMain} className="w-[400px] h-[400px] image-doc m-4 " />
       
        
       </div>

        <ServiseBlock to={id} />


       <Link to="/"/>
      
    </div>
  )
}