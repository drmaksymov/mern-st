import React, {useEffect, useState} from "react"

/* import './../styleModule/ServiswBlock.module.css'; */
import { CiCircleChevRight } from "react-icons/ci";
import { Link } from 'react-router-dom';


export const ServiseBlock = (props) => {

    const [service, setService] = useState([])

    const URL_SERVICE = "http://localhost:3001/service"

    useEffect( () => {
        fetch(URL_SERVICE)
        .then(res => res.json())
        .then(data => setService(data))
        .catch(console.log("Error Service"))
    }, [])

   


  return (
    <div >
        
              <div className=" flex gap-4 flex-wrap justify-center mt-10 ">
              
              
               {service?.map(services =>(
                        <div  className="ServiseBlockitem h-[120px] w-[350px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                        <img src={services.imgServ} className="h-[60px] w-[60px]" />
                        <Link to={`/service/${services.id}` || `/service/${props.to}`} > <div className="">
                            <p className="text-[16px]">{services.title}</p>
                            <p className="text-[14px]"> {services.description}</p>
                    </div></Link>
                    <CiCircleChevRight  size= '4em' color='#737476'/> 
                   </div>
               ) )}
               </div>
    </div>
  )
}


