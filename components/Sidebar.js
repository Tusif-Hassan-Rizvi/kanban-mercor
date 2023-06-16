import React from 'react'
import Image from 'next/image'
import styles from "../src/styles/sidebar.module.css";
import projectnamelogo from '../public/project_name_logo.svg'
import Exapndarrow from '../public/Expandarrow.svg'
import homelogo from '../public/home.svg'
import messageslogo from '../public/message.svg'
import taskslogo from '../public/task.svg'
import memberslogo from '../public/profile.svg'
import settingslogo from '../public/setting.svg'
import Addproject from '../public/addproject.svg'
import Link from 'next/link';

function Sidebar() {
    // links array 
    const links = [
        { linkname: "Home", logo: homelogo },
        { linkname: "Messages", logo: messageslogo },
        { linkname: "Tasks", logo: taskslogo },
        { linkname: "Members", logo: memberslogo },
        { linkname: "Settings", logo: settingslogo }
    ];
    return (
        <>
            <aside className={`${styles.sidebar_box}`}>
                <div className={`${styles.project_logo_name_main_box}`}>
                    {/* project name and logo box */}
                    <div className={`${styles.project_logo_name_box}`}>
                        {/* project logo  */}
                        <Image
                            className={`${styles.project_logo}`}
                            src={projectnamelogo}
                            alt="This is project name logo"
                            width={24}
                            height={24}
                        />

                        {/* project name  */}
                        <span>Project M.</span>

                        {/* expan arrow logo  */}
                        <Image
                            className={`${styles.expand_arrow_logo}`}
                            src={Exapndarrow}
                            alt="Expand Arrow"
                            width={26}
                            height={22}
                        />
                    </div>
                </div>

                {/* links box */}
                <div className={`${styles.links_box}`}>
                    <div>
                        {/* mapping links array  */}
                        {links.map((linkgroup, index) => (
                            <Link href={"/"}>
                            <div key={index} className={`${styles.links}`}>
                                <Image src={linkgroup.logo} width={24} height={24} className={`${styles.links_child}`}/>
                                <span className={`${styles.links_child}`}>{linkgroup.linkname}</span>
                            </div>
                            </Link>
                        ))}

                    </div>
                </div>

                {/* projects box  */}
                <div className={`${styles.project_box}`}> 

                <div className={`${styles.projectbox_heading}`}>
                    <span>
                        MY PROJECTS
                    </span>
                    <Image src={Addproject} width={16} height={16}/>
                </div>

                </div>
            </aside>
        </>
    )
}

export default Sidebar