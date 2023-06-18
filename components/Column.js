import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import styles from "../src/styles/mainboxbottom.module.css";
import Image from "next/image";
import AddTaskbox from "../public/taskboxadd.svg";
import TaskComment from "../public/taskcomments.svg";
import TaskFile from "../public/taskfile.svg";

const Column = ({ column, tasks }) => {
  console.log("columns ", column.id, "Tasks", tasks);
  return (
    <Droppable droppableId={column.id}>
      {(droppableProvided, droppableSnapshot) => (
        <section
          className={`${styles.to_do} ${styles.common_box}`}
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          <div className={`${styles.task_box_top_bar}`}>
            {/* circle  */}
            <div
              className={`${styles.task_box_circle}`}
              style={{ background: `${column.circlecolor}` }}
            ></div>
            {/* task type name  */}
            <div className={`${styles.task_box_task_type_name}`}>
              {column.title}
            </div>

            {/* number of tasks */}
            <div className={`${styles.task_box_task_numbers}`}>
              <span>{column.taskIds.length}</span>
            </div>

            {/* add task icon  */}
            {column.id === "column-1" ? (
              <div className={`${styles.task_box_add_tasks}`}>
                <Image src={AddTaskbox} width={24} height={24} />
              </div>
            ) : null}
          </div>
          {/* seprator line  */}
          <div
            className={`${styles.taskbox_seprator_line}`}
            style={{ border: `3px solid ${column.bordercolor}` }}
          ></div>

          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
              {(draggableProvided, draggableSnapshot) => (
                <div
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.draggableProps}
                  {...draggableProvided.dragHandleProps}
                  style={{
                    userSelect: "none",
                    ...draggableProvided.draggableProps.style,
                  }}
                >
                  {/* while dragging and dropping shows */}
                  {/* <div
                    className={`${styles.dragging_and_dropping}`}
                    style={
                      draggableSnapshot.isDragging
                        ? {
                            background: "rgba(80, 48, 229, 0.06)",
                            border: "1px dashed rgba(80, 48, 229, 0.59)",
                          }
                        : { background: "none", border: "none" }
                    }
                  >
                  </div> */}

                  <div className={`${styles.drag_box}`}>
                    {/* task type and more  */}
                    <div className={`${styles.task_type_more}`}>
                      {/* task type  */}
                      <div
                        className={`${styles.task_type}`}
                        style={
                          task.tasktype === "Low"
                            ? {
                                background: "rgba(223, 168, 116, 0.2)",
                                color: "#d58d49",
                              }
                            : task.tasktype === "High"
                            ? {
                                background: "rgba(216, 114, 125, 0.1)",
                                color: "#D8727D",
                              }
                            : {
                                background: "rgba(131, 194, 157, 0.2)",
                                color: "rgba(104, 178, 102, 1)",
                              }
                        }
                      >
                        <span>{task.tasktype}</span>
                      </div>
                      {/* task more  */}
                      <div className={`${styles.task_more}`}>...</div>
                    </div>

                    {/* task heading  */}
                    <div className={`${styles.task_heading}`}>
                      {task.heading}
                    </div>

                    {/* task contenet  */}
                    <div className={`${styles.task_content}`}>
                      <span>{task.content}</span>
                    </div>

                    {/* drag box bottom info comment file  */}
                    <div className={`${styles.drag_box_bottom}`}>
                      {/* colabratore */}
                      <div className={`${styles.task_colabratore}`}></div>

                      {/* comments  */}
                      <div className={`${styles.task_comments}`}>
                        <Image src={TaskComment} width={16} height={16} />
                        <span>0</span>
                        <span>Comments</span>
                      </div>

                      {/* files  */}
                      <div className={`${styles.task_files}`}>
                        <Image src={TaskFile} width={16} height={16} />
                        <span>0</span>
                        <span>Files</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
        </section>
      )}
    </Droppable>
  );
};

export default Column;
