import React from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Menu } from "./Menu"
import { ModalPopUp } from "./blockComponents/ModalPopUp"

import { useState } from "react"
//import './App.css'
import { HeadTop } from './HeadTop';



export const Layout = () => {
  
  const [modalActive, setModalActive] = useState(true);
    
  return (
    <div>
      <HeadTop/>
       <Menu/>
       <Outlet/>
       <ModalPopUp active={modalActive} setActive={setModalActive}/>
       <Footer/>
       
      
       
      
    </div>
  )
}