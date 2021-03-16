import "./components.css";
import { Task } from "./task";

export function StageColumn() {
    return (
        <div className="stage-column-container">
            <h3>Stage Name (2)</h3>
            <br/>
            <Task />
            <Task />
        </div>
    )
};