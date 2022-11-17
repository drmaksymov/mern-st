import React, {useState} from "react"
//import './App.css'
import { ModalPopUp } from './blockComponents/ModalPopUp';



export const HeadTop = () => {
    
  const [modal, setModal] = useState(true);

  const CloseModal = () => {
    setModal(!modal);
  }

  return (
    <div className="bg-slate-100">
    <div className="h-10 container mx-auto flex justify-between items-center p-2">
       <span className="text-xs">м.Полтава, вул. Комонавтів 19</span>
       <span onClick={CloseModal} className="text-sm cursor-pointer">+38095566 5656</span>
       
    </div>
    {!modal && <ModalPopUp CloseModal={CloseModal}/>}
    </div>
  )
}