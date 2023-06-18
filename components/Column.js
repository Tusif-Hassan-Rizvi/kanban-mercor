import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import styles from "../src/styles/mainboxbottom.module.css";
import Image from 'next/image';
import AddTaskbox from '../public/taskboxadd.svg'

const Column = ({ column, tasks }) => {
  console.log("columns ", column.id, "Tasks", tasks)
  return (
    <section className={`${styles.to_do} ${styles.common_box}`}>
      <div className={`${styles.task_box_top_bar}`}>
        {/* circle  */}
        <div className={`${styles.task_box_circle}`} style={{ background: `${column.circlecolor}` }}></div>
        {/* task type name  */}
        <div className={`${styles.task_box_task_type_name}`}>{column.title}</div>

        {/* number of tasks */}
        <div className={`${styles.task_box_task_numbers}`}>
          <span>{column.taskIds.length}</span>
        </div>

        {/* add task icon  */}
        {column.id === "column-1" ? <div className={`${styles.task_box_add_tasks}`}>
          <Image src={AddTaskbox} width={24} height={24} />
        </div> : null}


      </div>
      {/* seprator line  */}
      <div
        className={`${styles.taskbox_seprator_line}`}
        style={{ border: `3px solid ${column.bordercolor}` }}
      ></div>

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
            style={{
              backgroundColor: droppableSnapshot.isDraggingOver ? 'lightblue' : 'white',
              padding: '0.5rem',
              borderRadius: '0.5rem',
            }}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    style={{
                      userSelect: 'none',
                      padding: '0.5rem',
                      margin: '0.5rem 0',
                      backgroundColor: draggableSnapshot.isDragging ? 'lightgreen' : 'white',
                      boxShadow: draggableSnapshot.isDragging ? '0 0.5rem 1rem rgba(0, 0, 0, 0.2)' : 'none',
                      borderRadius: '0.5rem',
                      ...draggableProvided.draggableProps.style,
                    }}
                  >
                    <span>{task.content}</span>
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </section>
  );

};

export default Column;
