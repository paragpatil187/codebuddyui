import React, { useState } from 'react'
import "./Hamberger.css"
import {GiHamburgerMenu  } from 'react-icons/gi'

function Hamberger() {
    const [show,setShow]=useState(false);
    const changeShow=()=> setShow(!show)
  return (
      <>
      <div onClick={changeShow}>
      <GiHamburgerMenu/></div>
      {show?
      
    <div className='dropdown'>
    <div><p>Setting</p>
    </div>
    <div>
    <p>SafeSearch</p></div>
    <div>
    <p>My Bing</p></div>
    <div>
    <p>Privacy</p></div>
    <div><p>Feedback</p></div>
    <div><p>Customise your Homepage</p></div>
    <div><p>Show menu bar</p></div>
    <div><p>show news and interests</p></div>
    <div><p>show Hompage Image</p></div>





    
    
    </div>:null}
    </>
  )
}

export default Hamberger