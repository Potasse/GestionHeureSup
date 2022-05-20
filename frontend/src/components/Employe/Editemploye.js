import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Employe from './Employe';

function Editemploye() {

  const navigate = useNavigate();

  const [matriculeE, setMatriculeE] = useState("");
  const [nomE, setNomE] = useState("");
  const [prenomE, setPrenomE] = useState("");
  const [salaireBE, setSalaireBE]=  useState("");

  
  useEffect(() => {

    //console.log("Edit");
  
    // setNomE(localStorage.getItem('nomES'));
    // setMatriculeE(localStorage.getItem('matriculeES'));
    // setPrenomE(localStorage.getItem('prenomES'));
    // setSalaireBE(localStorage.getItem('salaireBES'));

    
  }, []);


  function Valider() {

    var idemploye = localStorage.getItem('idemploye');
    console.log(idemploye);


  }

  function UpdateEmployes (e) {

    e.preventDefault()

    axios.put(`http://localhost:5000/employe/update-employe`, {'matricule':matriculeE, 'nom': nomE, 'prenom': prenomE, 'salaireB': salaireBE, "matriculenew": matriculeE })

      .then(res => {
       
          
          console.log(res.data);
          
          setMatriculeE(res.data.matricule);
          setNomE(res.data.nom);
          setPrenomE(res.data.prenom);
          setSalaireBE(res.data.salaireB);
          // localStorage.removeItem('nomES');
          // localStorage.removeItem('matriculeES');
          // localStorage.removeItem('prenomES');
          // localStorage.removeItem('salaireBES');

          alert("Modification avec succes");

          navigate('/employes');
           //Refresh Page
          window.location.reload(false);
          localStorage.clear();
      
     
      })
      .catch((error) => {
        console.log(error);
      })

  }

  const onChangeHandlerMatricule = event => {

    setMatriculeE(event.target.value);
    
  };

  const onChangeHandlerNom = event => {

    setNomE(event.target.value);
    
  };

  const onChangeHandlerPrenom = event => {

    setPrenomE(event.target.value);
    
  };

  const onChangeHandlerSalaire = event => {

    setSalaireBE(event.target.value);
    
  };

  const Back = () => {

    //navigate('/employes');
    
    //Rafraichir la page
    window.location.reload(false);

    // setMatriculeE("")
    // setNomE("");
    // setPrenomE("");
    // setSalaireBE("");

  }

  return (
    <div>


<div className="container mx-auto">
          <div className="max-w-xl mx-auto rounded-md shadow-sm">
            <div className="text-center py-2">

              <h1 className="text-3xl font-semibold text-gray-700">
                MODIFIER UN EMPLOYE 
              </h1>
              <p className="text-red-400">Remplisser les champs correctement</p>
            </div>

            <div>
              <form action="">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
                    Matricule
                  </label>
                  <input
                  disabled
                    type="text"
                    name="matricule"
                    onChange={onChangeHandlerMatricule } value={ matriculeE}
                    placeholder="Matricule"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                    Nom
                  </label>
                  <input
                    onChange={ onChangeHandlerNom } value={ nomE }
                  
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="prenom" className=" block mb-2 text-sm text-gray-600">
                    Prénom
                  </label>
                  <input
                  onChange={onChangeHandlerPrenom } value = { prenomE }
                    type="text"
                    name="prenom"
                    placeholder="Prénom"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block mb-2 text-sm text-gray-600">
                    Salaire de base
                  </label>
                  <input
                  onChange={ onChangeHandlerSalaire } value={ salaireBE}
                    type="text"
                    name="salaire"
                    placeholder="Salaire"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>

                <div className="mb-6 flex justify-end mt-2">
                  <button
                  onClick={ Back }
                    type="submit"
                    className="w-1/3 px-1 py-2 text-white bg-red-500 rounded-md  focus:bg-indigo-600 focus:outline-none mr-2"
                  >
                    Annuler
                  </button>

                  <button
                  onClick={ UpdateEmployes }
                    type="submit"
                    className="w-1/3  px-1 py-2 text-white bg-green-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
                  >
                    Valider
                  </button>
                </div>
                <br className="" />
              </form>
            </div>
          </div>
        </div>

        {/* <Employe/> */}

    </div>
  )
}

export default Editemploye