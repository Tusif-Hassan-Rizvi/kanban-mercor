import React from 'react'
import Navbar from './Navbar'

function Mainbox({getExpandNavbar, isexpand}) {
  return (
    <div >
      {/* top navigation bar  */}
      <Navbar getExpandNavbar={getExpandNavbar} isexpand={isexpand}></Navbar>
    </div>
  )
}

export default Mainbox