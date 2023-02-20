import React, {useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  // const sections = {
  //   basicInfo: "Heading",
  //   workExp: "Job",
    
  //   education: "Education",
  //   achievement: "Hobbies",
  //   summary: "Reference",
  //   other: "Other",
  // };
  
  const resumeRef = useRef();
   const [activeColor, setActiveColor] = useState(colors[0]);
  // const [resumeInformation, setResumeInformation] = useState({
  //   [sections.basicInfo]: {
  //     id: sections.basicInfo,
  //     sectionTitle: sections.basicInfo,
  //     detail: {},
  //   },
  //   [sections.workExp]: {
  //     id: sections.workExp,
  //     sectionTitle: sections.workExp,
  //     details: [],
  //   },
  //   // [sections.project]: {
  //   //   id: sections.project,
  //   //   sectionTitle: sections.project,
  //   //   details: [],
  //   // },
  //   [sections.education]: {
  //     id: sections.education,
  //     sectionTitle: sections.education,
  //     details: [],
  //   },
  //   [sections.achievement]: {
  //     id: sections.achievement,
  //     sectionTitle: sections.achievement,
  //     points: [],
  //   },
  //   [sections.summary]: {
  //     id: sections.summary,
  //     sectionTitle: sections.summary,
  //     detail: "",
  //   },
  //   [sections.other]: {
  //     id: sections.other,
  //     sectionTitle: sections.other,
  //     detail: "",
  //   },
  // });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Connect Wallet <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      
    </div>
  );
}

export default Body;
