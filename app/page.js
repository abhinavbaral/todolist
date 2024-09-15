"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

// This is the About Us page.

export const page = () => {
  const [first, setfirst] = useState("")
  const [MNote, setMNote] = useState([])
  setMNote([...MNote, {first}])
  let handler = function(e){
    e.preventDefault ()
    setfirst("")
  }
  let show = <h2>No Notes</h2>
  show= MNote.map(function (Note,index) {
    return
    <h5>{Note.first}</h5>
    
  })
  return (
    <>
    <Header/>
    <form className='text-2xl text-black font-light  m-5 ' onSubmit={handler}>
  <input type='text' placeholder='Add a new Note' value={first} onChange={function(e){
setfirst(e.target.value)
  }} />
  <button className='bg-black m-5 px-2 py-.5 text-white text-2xl rounded'>Add</button>
</form>
<hr/>
<div className='p-8 bg-slate-200'>
  <ul>
    {show}
  </ul>
</div>
    <Footer/>
    </>
  )
}
export default page
