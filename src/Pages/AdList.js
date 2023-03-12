import React from 'react'

export default function AdList() {
  return (
    <>
      <div className="ppage text-light">
        <div className="pgg">
          <h1>Pricing Packages</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempore <br /> incididunt ut labore et dolore magna aliqua, rhoncus est</p>
        </div>
      </div>
      <div className=" container mt-5 best">
        <h1 className='fw-normal text-capitalize mt-5'>Searching for the best places ?</h1>
        <div className="price mt-5 d-flex">
          <div className="standard mx-2">
            <h3 className='text-light fs-5 bg-dark p-4 text-center'>Standard</h3>
            <div className="table border border-top-0 text-center lh-sm">
              <h4 className='text-success fs-1 fw-light mt-5'>$58</h4>
              <p className='mt-4 text-secondary'>Listings Included: 2</p>
              <p className='text-secondary'>Featured Included: 1</p>
              <p className='text-secondary'>Duration (months):</p>
              <h6 className='mt-4'><a href="" className='text-dark fw-normal fs-6 '>BUY PACKAGE</a></h6>
            </div>
          </div>
          <div className="premium mx-2">
            <h3 className='text-light fs-5 bg-dark p-4 text-center'>Premium</h3>
            <div className="table border border-top-0 text-center lh-sm">
              <h4 className='text-success fs-1 fw-light mt-5'>$72</h4>
              <p className='mt-4 text-secondary'>Listings Included: 4</p>
              <p className='text-secondary'>Featured Included: 5</p>
              <p className='text-secondary'>Duration (months):12</p>
              <h6 className='mt-4'><a href="" className='text-dark fw-normal fs-6 '>BUY PACKAGE</a></h6>
            </div>
          </div>
          <div className="advanced mx-2">
            <h3 className='text-light fs-5 bg-dark p-4 text-center'>Adavnced</h3>
            <div className="table border border-top-0 text-center lh-sm">
              <h4 className='text-success fs-1 fw-light mt-5'>$91</h4>
              <p className='mt-4 text-secondary'>Listings Included: 7</p>
              <p className='text-secondary'>Featured Included: 8</p>
              <p className='text-secondary'>Duration (months):12</p>
              <h6 className='mt-4'><a href="" className='text-dark fw-normal fs-6 '>BUY PACKAGE</a></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

