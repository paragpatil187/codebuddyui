import React from 'react'
import Carousele from './Carousele'
import Navbar from './Navbar'
import Searchbox from './Searchbox'
import "./Mainpage.css"

function Mainpage() {
  return (
    <>
    <div className='bodyx'>
    <Navbar/>
    <Searchbox/>
    <h3 style={{color:"white", marginLeft:"-100px", fontSize:"15px"}}>ভাষা: English हिंदी اردوਪੰ ਜਾਬੀ मराठी తెలుగు தமி ழ்ಕನ್ನಡ ગુજરાતી മലയാളം</h3>
    <Carousele/>
    </div>
    </>
    
  )
}

export default Mainpage