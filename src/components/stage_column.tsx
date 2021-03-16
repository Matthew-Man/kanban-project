import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./components.css";
import { Task } from "./task";

export function StageColumn() {
    return (
        <div className="stage-column-container">
            <h3>Stage Name (2)</h3>
            <br/>
            <Task />
            <Task />
            <button className="add-task"><FontAwesomeIcon icon={faPlus}/> Add Task</button>
        </div>
    )
};