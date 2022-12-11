import React, {useState, useRef, useEffect} from "react"
import {motion} from "framer-motion"
import { DoctorHorizontalBlockItems } from "./DoctorHorizontalBlockItems"

//import './App.css'



export const DoctorHorizontalBlock = () => {
    const [width, setWidth] = useState(0);
    const [doctor, setDoctors ] = useState([])
    const carusel = useRef();





useEffect(() => {
            fetch(`http://localhost:3001/doctor/`)
            .then(res => res.json())
            .then(data => setDoctors(data))
            
}, [])

  useEffect(() => {
    console.log(carusel.current.scrollWidth)
    setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth);
  }, []);

    
  return (
    <motion.div ref={carusel} whileTap={{cursor:"grabbing"}} className="carusel   h-[350px] flex items-center overflow-hidden mx-auto cursor-pointer" >
    <motion.div drag="x" 
    dragConstraints={{right: 0, left: -width}}
    
    className="carusel-inner h-[350px]   gap-4  flex  items-center p-4">

      

        
       { doctor.map(doc => (
                <DoctorHorizontalBlockItems to={`/doctor/${doc.id}`} key={doc.id} src={doc.imgdoc} name={doc.name} spec={doc.specialty} />
       ))} 
     


        
    </motion.div>
</motion.div>

  )
}