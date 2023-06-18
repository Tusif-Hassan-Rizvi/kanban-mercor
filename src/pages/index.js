import { useState } from 'react'
import Mainbox from '../../components/Mainbox'
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
        <div className='flex flex-row'>
          {/* side bar  */}
          <Sidebar getExpandSidebar={getExpandSidebar} isexpand={isexpand}></Sidebar>
          {/* main box  */}
          <Mainbox getExpandNavbar={getExpandNavbar} isexpand={isexpand}></Mainbox>

        </div>
      </div>
    </>
  )
}
