import { useState } from 'react'
import Mainbox from '../../components/Mainbox'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'



export default function Home() {
// state manage for exapnd sidebar 
const [isexpand, setIsexpand] = useState(false)

  function getExpandNavbar(val) {
    console.log("navbarr", val);
    setIsexpand(val)
  }

  function getExpandSidebar(val) {
    console.log("Sidebar", val)
    setIsexpand(val)
  }
  return (
    <>
      <div>
        {/* top navigation bar  */}
        <Navbar getExpandNavbar={getExpandNavbar} isexpand={isexpand}></Navbar>
        <div className='flex flex-row'>
          {/* side bar  */}
          <Sidebar getExpandSidebar={getExpandSidebar} isexpand={isexpand}></Sidebar>
          {/* main box  */}
          {/* <Mainbox></Mainbox> */}
        </div>
      </div>
    </>
  )
}
