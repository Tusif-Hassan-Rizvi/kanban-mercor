import React, { useState } from "react";
import Image from "next/image";
import styles from "../src/styles/sidebar.module.css";
import projectnamelogo from "../public/project_name_logo.svg";
import Exapndarrow from "../public/Expandarrow.svg";
import homelogo from "../public/home.svg";
import messageslogo from "../public/message.svg";
import taskslogo from "../public/task.svg";
import memberslogo from "../public/profile.svg";
import settingslogo from "../public/setting.svg";
import Addproject from "../public/addproject.svg";
import LampOn from "../public/lampon.svg";
import Link from "next/link";

function Sidebar({ getExpandSidebar, isexpand }) {
  // links array
  const links = [
    { linkname: "Home", logo: homelogo },
    { linkname: "Messages", logo: messageslogo },
    { linkname: "Tasks", logo: taskslogo },
    { linkname: "Members", logo: memberslogo },
    { linkname: "Settings", logo: settingslogo },
  ];

  // porject list array
  const ProjectList = [
    "Mobile App",
    "Website Redesign",
    "Design System",
    "Wireframes",
  ];

  // state for handle hover effect on project list
  const [hoverStates, setHoverStates] = useState(
    Array(ProjectList.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setHoverStates((prevHoverStates) => {
      const newHoverStates = [...prevHoverStates];
      newHoverStates[index] = true;
      return newHoverStates;
    });
  };

  const handleMouseLeave = (index) => {
    setHoverStates((prevHoverStates) => {
      const newHoverStates = [...prevHoverStates];
      newHoverStates[index] = false;
      return newHoverStates;
    });
  };

  return (
    <>
      <aside
        className={`${styles.sidebar_box}`}
        style={isexpand ? { display: "none" } : { display: "block" }}
      >
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
              onClick={() => {
                getExpandSidebar(!isexpand);
              }}
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
              <div key={index} className={`${styles.links}`}>
                <Image
                  src={linkgroup.logo}
                  width={24}
                  height={24}
                  className={`${styles.links_child}`}
                  alt={`${linkgroup.linkname} icon`}
                />
                <span className={`${styles.links_child}`}>
                  {linkgroup.linkname}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* projects box  */}
        <div className={`${styles.project_box}`}>
          {/* project heading  */}
          <div className={`${styles.projectbox_heading}`}>
            <span>MY PROJECTS</span>
            <Image src={Addproject} width={16} height={16} alt="add project" />
          </div>
          {/* project list  */}
          {ProjectList.map((list, index) => (
            <div
              key={index}
              className={`${styles.project_list}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* circle  */}
              <div
                className={`${styles.listcircle}`}
                style={{
                  backgroundColor: `rgba(${Math.floor(
                    Math.random() * 256
                  )}, ${Math.floor(Math.random() * 150)}, ${Math.floor(
                    Math.random() * 200
                  )})`,
                }}
              ></div>
              {/* project name  */}
              <div
                className={`${styles.listname}`}
                style={
                  hoverStates[index]
                    ? { color: "#0D062D", fontWeight: 600 }
                    : { color: "#787486", fontWeight: 500 }
                }
              >
                {list}
              </div>

              {/* more button  */}
              <div
                className={`${styles.list_more}`}
                style={
                  hoverStates[index] ? { display: "flex" } : { display: "none" }
                }
              >
                ...
              </div>
            </div>
          ))}

          <div className={`${styles.bottom_messege}`}>
            {/* bulb icon */}
            <div className={`${styles.bulb_icon}`}>
              <div>
                <Image
                  src={LampOn}
                  width={24}
                  height={24}
                  className={`${styles.bulb_icon_logo}`}
                  alt="lamp icon"
                />
              </div>
            </div>

            {/* heading  */}
            <div className={`${styles.bottom_heading}`}>Thoughts Time</div>

            {/* paragraph  */}
            <div className={`${styles.bottom_paragraph}`}>
              <p>
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
            </div>

            {/* write messege  */}
            <div className={`${styles.write_messege}`}>
              <input type="text" placeholder="Write a Messege" />
            </div>
          </div>

          {/* ahh! side bar work is done at saturday 17/6/2023 at 11:25pm by Tusif. */}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;