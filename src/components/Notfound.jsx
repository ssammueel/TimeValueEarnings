import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <>
    <form className='form'>

      
      <h2>page not found please check your url</h2>
      
      <p>Go to page <Link to="/">CCL</Link></p> {/* make validation to make sure that the hours dont exeed 24 hrs */}

    </form>
    </>
  )
}
