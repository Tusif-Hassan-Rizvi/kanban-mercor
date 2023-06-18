import React from "react";
import styles from "../src/styles/mainboxbottom.module.css";

function Test() {
  return (
    <>
      {/* background: #5030e5; */}
      {/* section for to do  */}
      <section className={`${styles.to_do} ${styles.common_box}`}>
        {/* to do task box top section  */}
        <div className={`${styles.task_box_top_bar}`}>
          {/* circle  */}
          <div className={`${styles.task_box_circle}`}></div>
          {/* task type name  */}
          <div className={`${styles.task_box_task_type_name}`}>To Do</div>

          {/* number of tasks */}
          <div className={`${styles.task_box_task_numbers}`}>
            <span>2</span>
          </div>

          {/* add task icon  */}
          <div className={`${styles.task_box_add_tasks}`}>
            <Image src={AddTaskbox} width={24} height={24} alt="add task" />
          </div>
        </div>

        {/* seprator line  */}
        <div
          className={`${styles.taskbox_seprator_line}`}
          style={{ background: "#800080", border: "3px solid #5030e5" }}
        ></div>
      </section>

      {/* section for on progress  */}
      <section className={`${styles.on_progress} ${styles.common_box}`}>
        {/* on progress task box top section  */}
        <div className={`${styles.task_box_top_bar}`}>
          {/* circle  */}
          <div
            className={`${styles.task_box_circle}`}
            style={{ background: "#FFA500" }}
          ></div>
          {/* task type name  */}
          <div className={`${styles.task_box_task_type_name}`}>On Progress</div>

          {/* number of tasks */}
          <div className={`${styles.task_box_task_numbers}`}>
            <span>2</span>
          </div>
        </div>

        {/* seprator line  */}
        <div
          className={`${styles.taskbox_seprator_line}`}
          style={{ border: "3px solid #FFA500" }}
        ></div>
      </section>

      {/* section for done */}
      <section className={`${styles.on_done} ${styles.common_box}`}>
        {/* on done task box top section  */}
        <div className={`${styles.task_box_top_bar}`}>
          {/* circle  */}
          <div
            className={`${styles.task_box_circle}`}
            style={{ background: "#76A5EA" }}
          ></div>
          {/* task type name  */}
          <div className={`${styles.task_box_task_type_name}`}>Done</div>

          {/* number of tasks */}
          <div className={`${styles.task_box_task_numbers}`}>
            <span>2</span>
          </div>
        </div>

        {/* seprator line  */}
        <div
          className={`${styles.taskbox_seprator_line}`}
          style={{ border: "3px solid #8BC48A" }}
        ></div>
      </section>
    </>
  );
}

export default Test;
