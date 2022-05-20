import React from 'react'
import logo from '../images/1114.jpg';
// import travaux from './images/travaux.png';
import { Link } from  "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {

  let navigate = useNavigate();

  const HandleSaisie = () => {

    

     //Navigation vers la page Saisie ("/")
     navigate("/saisiehs", { replace: true });

  }
  return (

<div className="">

  <div class="w-full flex flex-wrap">


  <div class="w-full w-2/4 flex flex-col">

      <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <a href="#" class=" font-bold text-xl p-4">
            
            <img className='inline-flex mr-2 mt-2' src={ logo } alt="plus" height={ 200 } width={200} ></img>
          
          </a>
      </div>

     

      <div class="flex flex-col justify-center md:justify-start my-auto mx-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          
      <div className="flex justify-center my-auto mx-auto">
        
        <h1 class="text-center text-black-600 text-4xl bg-white font-bold rounded-lg shadow-xl">GESTION DES HEURES <br></br>SUPPLEMENTAIRES</h1>
        

      </div>

          <div className='grid gap-y-3 py-20'>

                  <Link to="/employes"> 
                  <div className=' text-center '>
                  
                    <button className='bg-black text-white text-center rounded-lg p-1 px-10 w-80 '>EMPLOYES</button><br></br>
                 
                  </div>
                  </Link>
                  
                  <div className=' text-center'>
                    
                    <button className='bg-black text-white text-center rounded-lg p-1 px-10 w-80 ' onClick={ HandleSaisie } >SAISIE HS</button><br></br>
                   
                  </div>

                  <div className=' text-center'>
                    
                    <button className='bg-black text-white text-center rounded-lg p-1 px-10 w-80 '>TABLEAU DE BORD</button><br></br>
                    
                  </div>
                  
                  <div className=' text-center'>
                    
                    <button className='bg-black text-white text-center rounded-lg p-1 px-10 w-80 '>PARAMETRE</button><br></br>
                    
                  </div>
          </div>

          
      </div>
      

  </div>

  <div class="w-2/4 shadow-2xl">
      <img class="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0"/>
  </div>


  </div>

</div>
  )
}

export default Home