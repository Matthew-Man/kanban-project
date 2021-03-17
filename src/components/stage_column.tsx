import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./components.css";
import { Task } from "./task";
import { AllStagesProps } from "./interface";

interface IStageColumn {
    name: string
}


function StageColumn({name}: IStageColumn) {
    return (
        <div className="stage-column-container">
            <h3>{name} (2)</h3>
            <br/>
            <Task />
            <Task />
            <button className="add-task"><FontAwesomeIcon icon={faPlus}/> Add Task</button>
        </div>
    )
};

export default function AllStages({columns} : AllStagesProps) {
    console.log("all stage", columns)
    return(
        <div className="all-stage-columns">
            {columns.map((item) => <StageColumn name={item.name}/>)}
        </div>
    )
}