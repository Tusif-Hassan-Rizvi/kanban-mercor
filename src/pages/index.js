import { useState, useEffect } from 'react'
import Mainbox from '../../components/Mainbox'
import Sidebar from '../../components/Sidebar'
import Head from 'next/head';



export default function Home() {
  // state manage for exapnd sidebar 
  const [isexpand, setIsexpand] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    function handleMediaQueryChange(event) {
      setIsexpand(event.matches);
    }

    // Added event listener for media query changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Update the initial state based on the media query
    setIsexpand(mediaQuery.matches);

    // Cleanup by removing the event listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  function getExpandNavbar(val) {
    setIsexpand(val)
  }

  function getExpandSidebar(val) {
    setIsexpand(val)
  }
  return (
    <>
    <Head><title>Kanban Mercor</title></Head>
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
