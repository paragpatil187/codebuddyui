import React from 'react'
import Hamberger from './Hamberger'
import "./Navbar.css"

function Navbar() {
  return (
      <div className='maindiv'>
    <div className='nav'>
    <img src="https://logos-world.net/wp-content/uploads/2021/02/Microsoft-Bing-Logo-2020-present.png" className='bingimage' alt="bingicon" style={{width:"60%"}}/>
    <p>Images</p>
    <p>Videos</p>
    <p>Translate</p>
    <p>...</p>
    
    <p style={{marginLeft:"100%"}}>SignIn</p>
    </div>
    <div className='ele'>
    <Hamberger />
    </div>
    
    </div>
  )
}

export default Navbar