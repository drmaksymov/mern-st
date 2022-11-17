import React from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Menu } from "./Menu"
import { ModalPopUp } from "./blockComponents/ModalPopUp"

//import './App.css'
import { HeadTop } from './HeadTop';



export const Layout = () => {
  
  
    
  return (
    <div>
      <HeadTop/>
       <Menu/>
       <Outlet/>
       
       <Footer/>
       
      
       
      
    </div>
  )
}