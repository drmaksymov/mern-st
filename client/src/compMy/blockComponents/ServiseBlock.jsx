import React from "react"
import ServiceImg from "./../../img/ServiseStomat.png" 
/* import './../styleModule/ServiswBlock.module.css'; */
import { CiCircleChevRight } from "react-icons/ci";

export const ServiseBlock = () => {
    
    
  return (
    <div className="ServiseBlock min-h-[400px] pb-10 bg-gray-100 flex item-center center pt-4 flex-col items-center">
        <h3 className="text-slate-600 text-3xl font-Russo ">ServiseBlock</h3>
              <div className=" flex gap-4 flex-wrap justify-center mt-10 ">
              
              
               <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        
                </div>
                <CiCircleChevRight  size= '2em' color='#737476'/> 
               </div>

               
               <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        <p className="text-[10px]"> лікуванням дефектів розвитку зубів та щелепно-лицьового кістяка</p>
                </div>
                <CiCircleChevRight  size= '4em' color='#737476'/> 
               </div>
                <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        <p>Ортодонтія</p>
                </div>
                <CiCircleChevRight  size= '2em' color='#737476'/> 
               </div>


               <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        <p>Ортодонтія</p>
                </div>
                <CiCircleChevRight  size= '2em' color='#737476'/> 
               </div>


               <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        <p>Ортодонтія</p>
                </div>
                <CiCircleChevRight  size= '2em' color='#737476'/> 
               </div>
               <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        <p>Ортодонтія</p>
                </div>
                <CiCircleChevRight  size= '2em' color='#737476'/> 
               </div>

               <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        <p>Ортодонтія</p>
                </div>
                <CiCircleChevRight  size= '2em' color='#737476'/> 
               </div>

               <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        <p>Ортодонтія</p>
                </div>
                <CiCircleChevRight  size= '2em' color='#737476'/> 
               </div>
               <div  className="ServiseBlockitem h-[100px] w-[300px] bg-slate-200 rounded-xl flex items-center justify-between pl-4 pr-4 gap-4">
                    <img src={ServiceImg} className="h-[60px] w-[60px]" />
                    <div className="">
                        <p>Ортодонтія</p>
                        <p>Ортодонтія</p>
                </div>
                <CiCircleChevRight  size= '2em' color='#737476'/> 
               </div>
               
              </div>
    </div>
  )
}


