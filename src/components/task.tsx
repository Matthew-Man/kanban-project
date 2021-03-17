import "./components.css";

interface ITask {
    description: string,
    stage_id: number,
    columnSize: number,
    task_id: number,
    moveTask: (direction: string, stage_id: number, task_id: number) => Promise<void>
}

export function Task({description, columnSize, stage_id, task_id, moveTask} : ITask) {
    const noColumnWarning = () => alert("Sorry, looks like there's no column to shift to in that direction")
    return (
        <div className="task-container">
            <p>{description}</p>
            <div className="task-move-container">
                <button onClick={() => stage_id === 1 ? noColumnWarning() : moveTask("left", stage_id, task_id)}>&lt;</button>
                <button onClick={() => stage_id === columnSize ? noColumnWarning() : moveTask("right", stage_id, task_id)}>&gt;</button>
            </div>
        </div>
    )
}


// async function moveTask(direction: string) {
//     let newStageId: number;
//     if (direction === "left") {
//         newStageId = stage_id - 1
//     } else {
//         newStageId = stage_id + 1
//     }
//     await fetch(`http://localhost:4000/tasks/${task_id}/${newStageId}`, {method: "POST"})
// }