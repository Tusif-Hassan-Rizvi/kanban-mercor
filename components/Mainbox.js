import React from 'react'
import styles from "../src/styles/mainbox.module.css";
import Navbar from './Navbar'
import Maintopbar from './Maintopbar'

function Mainbox({getExpandNavbar, isexpand}) {
  return (
    <div >
      {/* top navigation bar  */}
      <Navbar getExpandNavbar={getExpandNavbar} isexpand={isexpand}></Navbar>
      {/* mainbox top section  */}
      <section className={`${styles.main_box}`}>
      <Maintopbar></Maintopbar>
      </section>
    </div>
  )
}

export default Mainbox