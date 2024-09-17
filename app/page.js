"use client";
import React, { useState } from "react";
import Header from "@/Components/Header";
import 'remixicon/fonts/remixicon.css';



export const page = () => {
  const [Inp, setInp] = useState("");
  const [MNote, setMNote] = useState([])

  let note = <h2>
  Add a new Note
    </h2>;
    if(MNote. length>0) {
      note = MNote.map((Note,index) =>{
        return(
          <li className="flex justify-between">
                  <div className="flex items-center justify-between mb-5">
          <h5 className="text-2xl font-semibold"> 
           {Note.Inp}
          </h5>
        </div> 
        <button className="bg-red-500 text-white  items-center justify-center text-center px-2 py-2 m-3 rounded">
        <i class="ri-delete-bin-6-fill"></i>
        </button>
          </li>
        )
      })
      
    }
  
  let Handle = function (e){
     e.preventDefault()
     setMNote([...MNote, {Inp}]);
     setInp("")
  }
  return (
    <>
      <Header />
      <form>
        <input
          type="text"
          className="border-2 border-black m-5 px-4 py-2"
          placeholder="Enter your Note"
          value={Inp}
          onChange={function(e){
             setInp(e.target.value)
          }}
        />
        <button onClick={Handle} className="bg-green-500 text-white  items-center justify-center text-center px-4 py-2 m-5 rounded">
        <i class="ri-add-line"></i>
        </button>
      </form>
      <hr/>    
      <div className="p-8 bg-gray-200">
        <ul>
            {note}

        </ul>
        </div>
    </>
  );
};
export default page;
