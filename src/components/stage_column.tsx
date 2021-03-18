import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./components.css";
import { Task } from "./task";
import { IColumns, ITask } from "./interface";

interface IStageColumn {
    name: string,
    id: number
    columnTasks: ITask[]
}

interface AllStagesProps {
    columns: IColumns[],
    allTasks: ITask[]
}


export default function AllStages({columns, allTasks} : AllStagesProps) {
    return(
        <div className="all-stage-columns">
            {columns.map((column) => {
                const tasksForColumn = allTasks.filter((task) => column.id === task.stage_id);
                return (
                    <StageColumn name={column.name} id={column.id} columnTasks={tasksForColumn} key={column.id}/>
                )
            })}
        </div>
    )
}


function StageColumn({name, id, columnTasks}: IStageColumn) {
    return (
        <div className="stage-column-container">
            <h3>{name} (2) (id:{id})</h3>
            <br/>
            {columnTasks.map((item) => <Task description={item.task_description} key={item.id}/>)}
            <button className="add-task"><FontAwesomeIcon icon={faPlus}/> Add Task</button>
        </div>
    )
};
