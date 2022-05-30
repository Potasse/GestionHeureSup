import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Nvemploye() {

  const [matricule, setMatricule] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [salaireB, setSalaireB] = useState("");

  const navigate = useNavigate();

  const handleAddEmploye = (e) => {

    e.preventDefault();

    axios
      .post(`http://localhost:5000/employe/create-employe`, {
        matricule: matricule,
        nom: nom,
        prenom: prenom,
        salaireB: salaireB,
      })
      .then((res) => {
        console.log(res.data);
      });

    //Refresh Page
    window.location.reload(false);

    //PROPS PARAMETRE WITH Higher-order functions concept
    //props.func()   //Pour utiliser cet props il a fallu passer un parametre au component
    //voir le component employer
    navigate("/employes", { replace: true });

    setMatricule("");
    setNom("");
    setPrenom("");
    setSalaireB("");
  };

  const handleBack = () => {
    navigate("/", { replace: true });
    window.location.reload(false);
  };

  return (
    <div
      className="bg-gradient-to-b
    from-sky-200 to-sky-500"
    >
      <div className="container mx-auto ">
        <div className="max-w-xl mx-auto rounded-md shadow-sm">
          <div className="text-center py-2">
            <h1 className="text-3xl font-semibold text-gray-700">
              CREATION DE NOUVEAU EMPLOYES
            </h1>
            <p className="text-red-400">Remplisser les champs correctement</p>
          </div>

          <div>
            <form action="" method="POST">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Matricule
                </label>
                <input
                  value={matricule}
                  onChange={(event) => setMatricule(event.target.value)}
                  type="text"
                  name="matricule"
                  placeholder="Matricule"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="nom"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Nom
                </label>
                <input
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="prenom"
                  className=" block mb-2 text-sm text-gray-600"
                >
                  Prénom
                </label>
                <input
                  value={prenom}
                  onChange={(event) => setPrenom(event.target.value)}
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="salaire"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Salaire de base
                </label>
                <input
                  value={salaireB}
                  onChange={(event) => setSalaireB(event.target.value)}
                  type="text"
                  name="salaireb"
                  placeholder="Salaire"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                />
              </div>

              <div className="mb-6 flex justify-end mt-2">
                <button
                  onClick={handleBack}
                  type="submit"
                  className="w-1/3 px-1 py-2 text-white bg-red-500 rounded-md  focus:bg-indigo-600 focus:outline-none mr-2"
                >
                  Annuler
                </button>

                <button
                  type="submit"
                  onClick={handleAddEmploye}
                  className="w-1/3  px-1 py-2 text-white bg-green-500 rounded-md  focus:bg-indigo-600 focus:outline-none"
                >
                  Enregistrer
                </button>
              </div>
              <br className="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nvemploye;
