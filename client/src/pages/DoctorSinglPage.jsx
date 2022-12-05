import React, {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom"

//import './App.css'



export const DoctorSinglPage = () => {
    
    const {id} = useParams()
    const [doctor, setDoctor] = useState([])
    


       /*  const specialt = doctor.specialty;
        console.log(specialt); */





    useEffect(  () => {
            fetch(`http://localhost:3001/doctor/${id}`)
            .then(res => res.json())
            .then(data =>  setDoctor(data))
            .catch(console.log("Error id doc"))
        }, [])

      

       




/* const [specialty, ...atr] = doctor;

 */
  return (
    <>
        <div className="container mx-auto w-[1200px] mt-4">
        <div className="flex flex-col sm:flex-row ">
        <img  src={doctor.imgdoc} className="w-[400px] h-[400px] image-doc " />
       
        <div className="ml-10 mt-10 flex gap-4 flex-col">
          <h1 className="font-Russo text-3xl ">{doctor.name} </h1>
          <div className="">

          {doctor.specialty?.map(spect => ( 
                            <span  className="inline-flex items-center justify-center rounded-full bg-emerald-200 px-2.5 py-0.5 text-emerald-700  mr-4">
                            <p className="whitespace-nowrap text-sm">{spect}</p>
                        </span>
                ))}  
                
          </div>
         



          <h2>Остіва: {doctor.education} </h2>
          <p> {doctor.description} </p>
        </div>
       </div>
       <Link to="/"/>
       </div>
    </>
  )
}