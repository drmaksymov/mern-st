import React from "react"
import { Link, Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Menu } from "./Menu"

//import './App.css'



export const Layout = () => {
    
    
  return (
    <div>
       <Menu/>
       <Outlet/>
       <Footer/>
      
    </div>
  )
}