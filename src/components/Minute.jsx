import React, { useState } from 'react'
import './cm_css/Form.css'

export const Minute = () => {

  const [inputDetails , SetinputDetails] = useState([
    
  ])


  return (
    <>
    <form className='form'>

      <input className='inp' type="number" placeholder='Amount Target' name='Amount' />
      <input className='inp' type="number" placeholder='Minutes' name='Minutes' />

    </form>
    </>
  )
}

  