import "./components.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AddStages() {
    return (
        <div className="outer-container">
            <div className="stage-container">
                <input type="text" placeholder="Add a new stage..."/>
                <button onClick={() => alert("Add column button pressed")}><FontAwesomeIcon icon={faPlus}/> Add Column</button>
            </div>
        </div>
    )
}