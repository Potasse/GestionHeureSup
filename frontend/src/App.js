import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";

import SaisiePage from './pages/SaisiePage';
import Employe from './components/Employe/Employe';
import Editemploye from './components/Employe/Editemploye';


function App() {
  return (
    
    <BrowserRouter>
    
    {/* <HomePage /> */}
    
    <div className="App">

        <Routes>

                <Route path="/" element= { <HomePage />} />
                <Route path="/employes" element= { <Employe />} />

                {/* <Route path="/editemployes" element= { <Editemploye />} /> */}

                <Route path="/saisiehs" element={ <SaisiePage/>} /> 
                
        </Routes>

    </div>

    </BrowserRouter>
  );
}

export default App;
