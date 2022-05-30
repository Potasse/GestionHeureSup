import React from 'react'
import Editemploye from '../components/Employe/Editemploye'
import Employe from '../components/Employe/Employe'
import Nvemploye from '../components/Employe/Nvemploye'

import ThemeContext from "../components/Context/ThemeContext";
import { useContext } from "react";



function EmployePage() {

  const { displayCompo, setDisplayCompo }= useContext(ThemeContext);

  return (

    <div>

        <div className={`${displayCompo ? "visible" : "hidden"}`} >
        <Editemploye  />
        </div>

        <div className={`${displayCompo ? "hidden" : "visible"}`}>
        <Nvemploye />
        </div>

        <Employe />

    </div>
    
  )
}

export default EmployePage