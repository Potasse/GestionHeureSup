import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Rechercheemploye() {
  // const [isOpen, setIsOpen]= useState(false);

  const [matriculeS, setMatriculeS] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  useEffect(() => {
    //setIsOpen(true);
  }, []);

  const HandleSearch = async (e) => {
    e.preventDefault();

    var matriculeS = document.getElementById("matricule").value;

    if (!matriculeS) {
      alert("Entrer un Matricule");
    } else {
      //console.log(matriculeS);
      try {
        const GetPosts = await axios.get(
          `http://localhost:5000/employe/Getbymatricule?matricule=${matriculeS}`
        );

        console.log(GetPosts.data);
        console.log("enter");

        if (!GetPosts.data) {
          alert("Matricule non valide");

          setNom("");
          setPrenom("");
          setMatriculeS("");
        } else {

          localStorage.setItem('matsearch', GetPosts.data.matricule);
          setNom(GetPosts.data.nom);
          setPrenom(GetPosts.data.prenom);
          setMatriculeS(GetPosts.data.matricule);
        }
      } catch (err) {
        console.error(err.message);
      }

      //setIsOpen(false);
      console.log("recherches");
    }
  };

  return (
    <div className="p-2 bg-gradient-to-b from-sky-200 to-sky-500">
      <h1 className="p-2 text-3xl font-semibold text-gray-700 text-center">
        Rechercher un employé
      </h1>

      <div className="max-w-2xl mx-auto">
        <form className="flex items-center">
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>

            <input
              type="text"
              name="matricule"
              id="matricule"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Entrer un matricule"
              required
            />
            <button
              type="button"
              className="flex absolute inset-y-0 right-0 items-center pr-3"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <button
            onClick={HandleSearch}
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Recherche
          </button>
        </form>
      </div>


      {/* <div className={`${isOpen ? "hidden" : "visible"}`} > */}

      <div className="max-w-2xl mx-auto mt-5">
        <h1 className="text-xl font-semibold text-gray-700 text-left">
          Employés:
          <span className="text-red-700 "> {nom + " " + prenom} </span>
        </h1>

        <div className="">
          <div>
            <form action="">
              <div className="grid grid-cols-3 gap-2">
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-600 font-bold"
                  >
                    Matricule
                  </label>
                  <input
                    disabled
                    value={matriculeS}
                    type="text"
                    name="matricule"
                    placeholder="Matricule"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="nom"
                    className="block mb-2 text-sm text-gray-600 font-bold"
                  >
                    Nom
                  </label>
                  <input
                    disabled
                    value={nom}
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="prenom"
                    className=" block mb-2 text-sm text-gray-600 font-bold"
                  >
                    Prénom
                  </label>
                  <input
                    disabled
                    value={prenom}
                    type="text"
                    name="prenom"
                    placeholder="Prénom"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <br className="" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto" id="">
        <div className="">
          <label
            htmlFor="prenom"
            className=" block mb-2 text-sm text-gray-600 font-bold"
          >
            Annee
          </label>
          <select
            type="text"
            name="annee"
            placeholder="Annee"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>

        <div className="">
          <label
            htmlFor="prenom"
            className=" block mb-2 text-sm text-gray-600 font-bold"
          >
            Mois
          </label>
          <select
            type="text"
            name="annee"
            placeholder="Annee"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>

        <div className="">
          <label
            htmlFor="prenom"
            className=" block mb-2 text-sm text-gray-600 font-bold"
          >
            Semaine
          </label>
          <select
            type="text"
            name="annee"
            placeholder="Annee"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>

        <div className="">
          <div className="datepicker relative">
            <label
              htmlFor="prenom"
              className=" block mb-2 text-sm text-gray-600 font-bold"
            >
              Calendrier
            </label>

            <input
              type="date"
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
              placeholder="Calendrier"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Rechercheemploye;
