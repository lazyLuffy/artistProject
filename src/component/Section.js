import React from 'react'

function Section() {
  return (
    <div className='col-12'>
        <div className='container mx-auto  p-4'>
        <p className='display-2 fw-bold text-dark'>
        Shortlist
        </p>
        <p className='display-6 text-dark'>
            Details
        </p>
        <div className='d-flex align-items-center justify-content-between my-4'>
        <span>
        <p className='h3'>
        Event Date
        </p>
        <p className='fs-6'>
        2023-02-22
        </p>
        </span>

        <span>
        <p className='h3'>
        Location
        </p>
        <p className='fs-6'>
      Delhi,India
        </p>
        </span>
        </div>
        <div className='my-2 text-center'>
        <p className='text-center h2'>
        Budget
        </p>
        <a className='btn btn-dark rounded-pill fs-4 my-2'>
         $500,000
        </a>

        </div>

        </div>
    </div>
  )
}

export default Section