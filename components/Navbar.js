import React, { useState } from 'react'
import styles from "../src/styles/navbar.module.css";
import Image from 'next/image';
import CalenderIcon from '../public/calender.svg'
import Nortification from '../public/nortification.svg'
import MessegeQuestion from '../public/messegequestion.svg'
import ArrowDown from '../public/arrowdown.svg'
import ExpandArrow from '../public/Expandarrow.svg'
import Link from 'next/link';


export default function Navbar({getExpandNavbar, isexpand}) {
    return (
        <>
            <header>
                <nav className={`${styles.navbar}`} style={isexpand?{width:'100vw'}:{width:'85vw'}}>
                    {/* navbar contents  */}
                    {/* exapnd sidebar  */}
                    <div className={`${styles.rotate_expand}`} style={isexpand?{display:"block"}:{display:"none"}} onClick={()=>getExpandNavbar(!isexpand)}>
                        <Image src={ExpandArrow} width={26} height={22} />
                    </div>
                    {/* input box */}
                    <div className={`${styles.input_box}`}>
                        <input placeholder='Search for anything...' />
                    </div>

                    {/* calender ask and nortification group  */}
                    <div className={`${styles.calender_ask_group}`}>
                        <Image src={CalenderIcon} width={24} height={24} />
                        <Image src={MessegeQuestion} width={24} height={24} />
                        <Image src={Nortification} width={24} height={24} />
                    </div>

                    {/* profile group  */}
                    <div className={`${styles.profile_group}`}>
                        {/* name and address  */}
                        <div className={`${styles.name_address}`}>
                            <span className={`${styles.profile_name}`}>Tusif Hassan Rizvi</span>
                            <span className={`${styles.profile_address}`}>Bihar, India</span>
                        </div>

                        {/* profile icon and info  */}
                        <Link href={"/"}>
                        <div className={`${styles.profile_image}`}>
                            <div className={`${styles.profile_logo}`}>
                            </div>
                            <Image src={ArrowDown} width={18} height={18} />
                        </div>
                        </Link>


                    </div>

                </nav>
            </header>
        </>
    )
}
