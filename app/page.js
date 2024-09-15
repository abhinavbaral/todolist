import React, { useState } from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

// This is the About Us page.

export const page = () => {
  const [first, setfirst] = useState(second)
  return (
    <>
    <Header/>

    <form className='text-2xl text-black font-light  m-5 '>
  <input type='text' placeholder='Add a new Note' />
  <button className='bg-black m-5 px-2 py-.5 text-white text-2xl rounded'>Add</button>
</form>

    <Footer/>
    </>
  )
}
export default page
