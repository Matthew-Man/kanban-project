import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./components.css";
import { Task } from "./task";
import { AllStagesProps } from "./interface";

interface IStageColumn {
    name: string,
    id: number
}


function StageColumn({name, id}: IStageColumn) {
    const demoTasks = [{
        id: 1,
        stage_id: 1,
        task_description: "demo task description"
        },{
        id: 2,
        stage_id: 1,
        task_description: "demo task description 2"
    }]

    return (
        <div className="stage-column-container">
            <h3>{name} (2) (id:{id})</h3>
            <br/>
            {demoTasks.map((item) => <Task description={item.task_description}/>)}
            <button className="add-task"><FontAwesomeIcon icon={faPlus}/> Add Task</button>
        </div>
    )
};

export default function AllStages({columns} : AllStagesProps) {
    console.log("all stage", columns)
    return(
        <div className="all-stage-columns">
            {columns.map((item) => <StageColumn name={item.name} id={item.id}/>)}
        </div>
    )
}