import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./components.css";
import { Task } from "./task";
import { IColumns, ITask } from "./interface";

interface IStageColumn {
    name: string,
    id: number,
    columnTasks: ITask[],
    handleTaskMoving: (direction: string, taskId: number, stage_id: number) => Promise<void>,
    maxColumns: number
}

interface AllStagesProps {
    columns: IColumns[],
    allTasks: ITask[],
    handleTaskMoving: (direction: string, taskId: number, stage_id: number) => Promise<void>
}


export default function AllStages({columns, allTasks, handleTaskMoving} : AllStagesProps) {
    const maxColumns = columns.length;
    return(
        <div className="all-stage-columns">
            {columns.map((column) => {
                const tasksForColumn = allTasks.filter((task) => column.id === task.stage_id);
                return (
                    <StageColumn name={column.name} id={column.id} columnTasks={tasksForColumn} key={column.id} handleTaskMoving={handleTaskMoving} maxColumns={maxColumns}/>
                )
            })}
        </div>
    )
}


function StageColumn({name, id, columnTasks, handleTaskMoving, maxColumns}: IStageColumn) {
    return (
        <div className="stage-column-container">
            <h3>{name} (2) (id:{id})</h3>
            <br/>
            {columnTasks.map((item) => <Task task={item} handleTaskMoving={handleTaskMoving} maxColumns={maxColumns} key={item.id}/>)}
            <button className="add-task"><FontAwesomeIcon icon={faPlus}/> Add Task</button>
        </div>
    )
};
