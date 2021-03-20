import "./components.css";
import { ITask } from "./interface";


interface ITaskHandle {
    task: ITask,
    handleTaskMoving: (direction: string, taskId: number, stage_id: number) => Promise<void>,
    maxColumns: number
}


export function Task({task, handleTaskMoving, maxColumns} : ITaskHandle) {
    const {id, stage_id, task_description} = task
    return (
        <div className="task-container">
            <p>{task_description}</p>
            <div className="task-move-container">
                <button onClick={() => stage_id === 1 ? alert("Sorry, it looks like you've reached the edge of the columns!") : handleTaskMoving("left", id, stage_id)}>&lt;</button>
                <button onClick={() => stage_id === maxColumns ? alert("Sorry, it looks like you've reached the edge of the columns!") : handleTaskMoving("right", id, stage_id)}>&gt;</button>
                <button onClick={() => alert("Delete card placeholder")}>Delete Card</button>
            </div>
        </div>
    )
}