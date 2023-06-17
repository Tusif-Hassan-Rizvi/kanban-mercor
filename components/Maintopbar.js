import React from 'react'
import styles from "../src/styles/mainboxtopbar.module.css";
import Editbutton from '../public/editbutton.svg'
import Sharebutton from '../public/shareicon.svg'
import Inviteicon from '../public/inviteicon.svg'
import Image from 'next/image';
import Filtericon from '../public/filter.svg'
import Calendaricon from '../public/calendar.svg'
import Pipe from '../public/pipe.svg'
import downArrow from '../public/arrowdown.svg'
import Share from '../public/share.svg'
import Verticleicon from '../public/pause.svg'
import GridIcon from '../public/menu.svg'


function Maintopbar() {
    return (
        <>
            <section className={`${styles.mainbox_topbar}`}>
                {/* project name and other links  */}
                <div className={`${styles.projectname_links}`}>
                    {/* project name edit and share links  */}
                    <div className={`${styles.name_edit_share}`}>
                        {/* project name  */}
                        <div className={`${styles.project_name}`}>
                            <span>Mobile App</span>
                        </div>
                        {/* edit and share button  */}
                        <div className={`${styles.edit_share}`}>
                            <Image src={Editbutton} width={30} height={30} />
                            <Image src={Sharebutton} width={30} height={30} />
                        </div>
                    </div>

                    {/* invite people  */}
                    <div className={`${styles.invite_people}`}>
                        {/* invite icon  */}
                        <Image src={Inviteicon} width={15} height={15} />
                        {/* invite text  */}
                        <span>Invite</span>
                        {/* invite users  */}
                        <div>
                            0
                        </div>
                    </div>


                </div>
                {/* sort and filter feature  */}
                <div className={`${styles.filter_sort}`}>
                    {/* filter and today  */}
                    <div className={`${styles.filter_today}`}>
                        <div className={`${styles.filter}`}>
                            <Image src={Filtericon} width={16} height={16} />
                            <span>Filter</span>
                            <Image src={downArrow} width={16} height={16} />
                        </div>
                        <div className={`${styles.today}`}>
                            <Image src={Calendaricon} width={16} height={16} />
                            <span>Today</span>
                            <Image src={downArrow} width={16} height={16} />
                        </div>
                    </div>
                    {/* share and view type  */}
                    <div className={`${styles.share_viewtype}`}>
                        {/* share button */}
                        <div className={`${styles.sharebox}`}>
                            <Image src={Share} width={16} height={16} />
                            <span>
                                Share
                            </span>
                        </div>

                        {/* piple seprater  */}
                        <div className='pipe_box'>
                            <Image src={Pipe} height={30} />
                        </div>

                        {/* view by vertice  */}
                        <div className={styles.view_verticle} >
                            <Image src={Verticleicon} width={20} height={20}/>

                        </div>

                        {/* view by grid */}
                        <div className={`${styles.view_grid}`}>
                        <Image src={GridIcon} width={20} height={20}/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Maintopbar