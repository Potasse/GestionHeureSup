import React, { useState } from "react";
import axios from "axios";
import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";

function Saisiehs() {
  //year = d.getFullYear()
  const { mat, setMat } = useContext(ThemeContext);
  
  const [heure, setHeure] = useState(Number);
  const [heuretwo, SetHeuretwo] = useState(Number);
  var [total, setTotal] = useState(Number);

  const HandleSave = async (e) => {

    console.log(heure);
    console.log(heuretwo);

    total = Math.abs(heure - heuretwo);
    //console.log(Math.abs(total));

    var matsaisie;
    matsaisie = localStorage.getItem("matsearch");
    console.log(matsaisie);

    console.log(mat);

    e.preventDefault();

    try {

      const HeureSUpdate = await axios.put(`http://localhost:5000/employe/saveheuresup`, { 'matricule': matsaisie  , 'heureS': total, 'matriculenew':matsaisie })

          
            console.log(HeureSUpdate.data);
            alert("Modification avec succes");
            window.location.reload(false);
            localStorage.clear();
    
  }

    catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div classNameName="flex justify-center">
      <div className="p-8">
        <form action="" method="POST" className="flex justify-center">
          <table className="table-auto border">
            <thead>
              <tr>
                <th className="font-bold p-2 border-b text-left">PERIODE</th>
                <th className="font-bold p-2 border-b text-left"></th>
                <th className="font-bold py-2 px-4 border-b text-left">
                  Lundi
                </th>
                <th className="font-bold py-2 px-4 border-b text-left">
                  Mardi
                </th>
                <th className="font-bold py-2 px-4 border-b text-left">
                  Mercredi
                </th>
                <th className="font-bold py-2 px-4 border-b text-left">
                  Jeudi
                </th>
                <th className="font-bold py-2 px-4 border-b text-left">
                  Vendredi
                </th>
                <th className="font-bold py-2 px-4 border-b text-left">
                  Samedi
                </th>
                <th className="font-bold py-2 px-4 border-b text-left">
                  Dimanche
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b text-left">Matin</td>
                <td className="p-2 border-b text-left">
                  <h1> Programme </h1>
                </td>
                <td className="py-2 px-4 border-b text-left">
                  <select
                    className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(event) => setHeure(event.target.value)}
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>

                  <select
                    className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(event) => SetHeuretwo(event.target.value)}
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>

                <td className="py-2 px-4 border-b text-left">
                  <select
                    className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(event) => SetHeuretwo(event.target.value)}
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>

                  <select
                    className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(event) => SetHeuretwo(event.target.value)}
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td className="p-2 border-b text-left">Soir</td>
                <td className="p-2 border-b text-left">Programme</td>
                <td className="py-2 px-4 border-b text-left">
                  <select
                    className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(event) => setHeure(event.target.value)}
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>

                  <select
                    className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(event) => SetHeuretwo(event.target.value)}
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>

                <td className="py-2 px-4 border-b text-left">
                  <select
                    className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(event) => setHeure(event.target.value)}
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>

                  <select
                    className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                    onChange={(event) => setHeure(event.target.value)}
                  >
                    <option selected></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </td>
              </tr>

              <tr className="">
                <td className="p-2 border-b text-left">
                  Total des heures / Jours
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <div className=" mt-5 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={HandleSave}
          >
            ENREGISTRER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Saisiehs;
