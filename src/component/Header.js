import React from 'react'

function Header() {
  return (
    <div className=' bg-dark h-25'>
        <div className='d-flex align-items-center justify-content-around '>
        <div className='d-flex align-items-center justify-content-center'>
        
        <img src='/logoProject.png' alt='logo' className='py-2'/>
        <p className='display-4 text-light p-0 m-0 fw-bold ps-2'> StarClinch</p>
        </div>
        <div className='text-center'>
            <p className='h6 text-light p-0 m-0'>
            Hello, NAME 
            </p>
        </div>
        </div>
    </div>
  )
}

export default Header