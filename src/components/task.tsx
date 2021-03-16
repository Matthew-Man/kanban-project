import "./components.css";

export function Task() {
    return (
        <div className="task-container">
            <p>Task to do description...</p>
            <div className="task-move-container">
                <button onClick={() => alert("Move task left")}>&lt;</button>
                <button onClick={() => alert("Move task right")}>&gt;</button>
            </div>
        </div>
    )
}