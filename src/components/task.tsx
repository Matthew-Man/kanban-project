import "./components.css";

interface ITask {
    description: string
}

export function Task({description} : ITask) {
    return (
        <div className="task-container">
            <p>{description}</p>
            <div className="task-move-container">
                <button onClick={() => alert("Move task left")}>&lt;</button>
                <button onClick={() => alert("Move task right")}>&gt;</button>
            </div>
        </div>
    )
}