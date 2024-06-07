import React from 'react'

export const Hour = () => {
  return (
    <>
    <form className='form'>

      
      <input className='inp' type="number" placeholder='Amount Target' name='Amount' />
      <input className='inp' type="number" placeholder='hours' name='Hours' /> {/* make validation to make sure that the hours dont exeed 24 hrs */}

    </form>
    </>
  )
}
