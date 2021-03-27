import "./components.css";
import { ITask } from "./interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


interface ITaskHandle {
    task: ITask,
    handleTaskMoving: (direction: string, taskId: number, stage_id: number) => Promise<void>,
    maxColumns: number,
    handleDeleteTask: (taskId: number) => void
}


export function Task({task, handleTaskMoving, maxColumns, handleDeleteTask} : ITaskHandle) {
    const {id, stage_id, task_description} = task
    const moveAlert = "Sorry, it looks like you've reached the edge of the columns!"
    return (
        <div className="task-container">
            <p>{task_description}</p>
            <div className="task-move-container">
                <button className="task-move-button" onClick={() => stage_id === 1 ? moveAlert : handleTaskMoving("left", id, stage_id)}>&lt;</button>
                <button className="task-move-button" onClick={() => stage_id === maxColumns ? moveAlert : handleTaskMoving("right", id, stage_id)}>&gt;</button>
                <button className="task-move-button" onClick={() => handleDeleteTask(id)}><FontAwesomeIcon icon={faTrash}/> Remove</button>
            </div>
        </div>
    )
}