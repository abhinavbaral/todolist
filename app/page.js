"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

// This is the About Us page.

export const Page = () => {
  const [first, setFirst] = useState("")
  const [MNote, setMNote] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (first.trim() !== "") {
      setMNote([...MNote, { first }])
      setFirst("")
    }
  }

  return (
    <>
      <Header />
      <form className='text-2xl text-black font-light m-5' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add a new Note'
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <button className='bg-black m-5 px-2 py-0.5 text-white text-2xl rounded' type='submit'>
          Add
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {MNote.length === 0 ? (
            <h2>No Notes</h2>
          ) : (
            MNote.map((note, index) => (
              <li key={index}>
                <h5>{note.first}</h5>
              </li>
            ))
          )}
        </ul>
      </div>
  
    </>
  )
}

export default Page
