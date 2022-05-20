import React, { useEffect, useState } from "react";
import Nvemploye from "./Nvemploye";
import Editemployes from "./Editemploye";
import axios from "axios";



function Employe() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {

    console.log("hello")
    // setIsOpen(false);
    getAll(); 
   

  }, []);

  const getAll = async () =>  {
    console.log("getAll");
    
    try {
      const userPosts = await axios.get(`http://localhost:5000/employe/allemployes`)

      console.log(userPosts);
     
      setLists(userPosts.data);
        
    } catch (err) {
          console.error(err.message);
    }

  };
  
  const Editemploye = async (id) => {

    console.log("EDIT");
    setIsOpen(true);
    console.log(id);

  }

  const Deleteemploye = async  (id) => {

    console.log("DELETE");
    setIsOpen(false);

    try {

      const userDelete = await axios.delete(`http://localhost:5000/employe/delete-employe?id=${ id }`)
      .then( userDelete =>{
          
        console.log(userDelete.data);
       

    })
    window.location.reload(false);
        
    } 
    catch (err) {

          console.error(err.message);
    }

    alert('vraiment');
    console.log(isOpen);

  }

  return (
    <div className="">
      {/* <h1 className="flex justify-center">CREATION DE NOUVEAU EMPLOYES</h1> */}
      {/* className={`mobile-menu  md:hidden ${isOpen ? "visible" : "hidden"}`} */}

      <div name="principalComponent" className="bg-gradient-to-b
                 from-sky-200 to-sky-500">
          
          <div className={`${isOpen ? "hidden" : "visible"}`} >
          <Nvemploye />
          </div>

          <div className={`${isOpen ? "visible" : "hidden"}`}>

          <Editemployes/>

          </div>

      </div>

    <div className="flex justify-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Matricule
              </th>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                Prenom
              </th>
              <th scope="col" className="px-6 py-3">
                Salaire de base
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex justify-center" onClick={ getAll }>Parametre</span>
              </th>
            </tr>
          </thead>
          <tbody>


          {(lists || []).map((list) => (

            <tr key={list._id} className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                { list.matricule }
              </th>
              <td className="px-6 py-4"> { list.nom }</td>
              <td className="px-6 py-4"> { list.prenom }</td>
              <td className="px-6 py-4"> { list.salaireB }</td>
              <td className="px-6 py-4">
               

              <div className="flex inline-flex gap-x-2">
                 
              
                 <div className="flex justify-right font-medium text-blue-600 dark:text-blue-500 hover:underline">
   
            
                         <button  onClick={ ()=> Editemploye(list._id) } type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                         Modifier
   
                         </button>
   
   
                   </div>
   
                    <div className=" flex justify-right font-medium text-blue-600 dark:text-blue-500 hover:underline">
   
                    <button  onClick={ ()=> Deleteemploye(list._id ) } type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                         Supprimer
   
                         </button>
                    </div>
                 </div>

              </td>
            </tr>
            )) }

          </tbody>
        </table>
      </div>

      </div>



    </div>
  );
}

export default Employe;
