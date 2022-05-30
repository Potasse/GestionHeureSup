import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

import ThemeContext from '../src/components/Context/ThemeContext'

import SaisiePage from './pages/SaisiePage';
import Employe from './components/Employe/Employe';
import { useState } from 'react';
import EmployePage from './pages/EmployePage';


function App() {

  const [mat, setMat] = useState(localStorage.getItem('matsearch'))

  const [displayCompo, setDisplayCompo] = useState(false);

  return (
    
    <BrowserRouter>

        <ThemeContext.Provider  value = { {mat, setMat}, {displayCompo, setDisplayCompo}}>

    <div className="App">

        <Routes>

                <Route path="/" element= { <HomePage />} />
                <Route path="/employes" element= { <EmployePage />} />
                <Route path="/saisiehs" element={ <SaisiePage/>} /> 
                
        </Routes>

    </div>
    </ThemeContext.Provider>

    </BrowserRouter>
  );
}

export default App;
