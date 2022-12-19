import React from "react"
import { Link } from "react-router-dom"

import { ServiseBlock } from './../compMy/blockComponents/ServiseBlock';



export const Service = () => {
    
    
  return (
    <div>
        <div className="ServiseBlock min-h-[100px] pb-10 bg-gray-100 flex item-center center pt-4 flex-col items-center">
        <h3 className="text-slate-600 text-3xl font-Russo ">ServiseBlock</h3>
       <ServiseBlock/>
       </div>
    </div>
  )
}