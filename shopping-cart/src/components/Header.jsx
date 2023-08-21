import React from 'react'
import './Styles/Header.css'

function Header() {
  return (
    <header className='bg-dark '>
        <div className="header">
          <div className="container">
            <div className='text-center text-light py-5'>
              <h1 className='fw-bolder'>
                Best site to buy Iphone's 
                <i className="fa fa-apple pl-3" aria-hidden="true"></i> 
              </h1>
              <p className='description'>
                Buy Iphone's with our best price
              </p>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header