import dynamic from "next/dynamic";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styles from "../src/styles/mainboxbottom.module.css";

const Column = dynamic(() => import("./Column"), { ssr: false });
const reorderColumnList = (sourceCol, startIndex, endIndex) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn = {
        ...sourceCol,
        taskIds: newTaskIds,
    };

    return newColumn;
};

export default function Mainbottombar() {
    const [state, setState] = useState(initialData);

    const onDragEnd = (result) => {
        const { destination, source } = result;

        // If user tries to drop in an unknown destination
        if (!destination) return;

        // if the user drags and drops back in the same position
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // If the user drops within the same column but in a different positoin
        const sourceCol = state.columns[source.droppableId];
        const destinationCol = state.columns[destination.droppableId];

        if (sourceCol.id === destinationCol.id) {
            const newColumn = reorderColumnList(
                sourceCol,
                source.index,
                destination.index
            );

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setState(newState);
            return;
        }

        // If the user moves from one column to another
        const startTaskIds = Array.from(sourceCol.taskIds);
        const [removed] = startTaskIds.splice(source.index, 1);
        const newStartCol = {
            ...sourceCol,
            taskIds: startTaskIds,
        };

        const endTaskIds = Array.from(destinationCol.taskIds);
        endTaskIds.splice(destination.index, 0, removed);
        const newEndCol = {
            ...destinationCol,
            taskIds: endTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol,
            },
        };

        setState(newState);
    };
    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className={`${styles.main_container}`}>
                    {state.columnOrder.map((columnId) => {
                        const column = state.columns[columnId];
                        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

                        return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                </div>
            </DragDropContext>
        </>
    )
}


const initialData = {
  tasks: {
    1: {
      id: 1,
      tasktype: "Low",
      heading: "Brainstroming",
      content: "Brainstorming brings team members' diverse experience into play.",
    },
    2: {
      id: 2,
      tasktype: "High",
      heading: "Research",
      content: "User research helps you to create an optimal product for users.",
    },
    3: {
      id: 3,
      tasktype: "High",
      heading: "Wireframes",
      content: "Low fidelity wireframes include the most basic content and visuals.",
    },
    4: {
      id: 4,
      tasktype: "Low",
      heading: "Onboarding Illustrations",
      content: "Create drag and drop feature",
    },
    5: {
      id: 5,
      tasktype: "Low",
      heading: "Moodboard",
      content: "Create page navigation menu",
    },
    6: {
      id: 6,
      tasktype: "Completed",
      heading: "Mobile App Design",
      content: "Create page layout",
    },
    7: {
      id: 7,
      tasktype: "Completed",
      heading: "Design System",
      content: "It just needs to adapt the UI from what you did before",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: [1, 2, 3],
      circlecolor: "#5030e5",
      bordercolor: "#5030e5",
    },
    "column-2": {
      id: "column-2",
      title: "On Progress",
      taskIds: [4, 5],
      circlecolor: "#FFA500",
      bordercolor: "#FFA500",
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [6, 7],
      circlecolor: "#76A5EA",
      bordercolor: "#8BC48A",
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};
