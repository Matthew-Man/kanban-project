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
    toggleModalShown: () => void
    setMColumnSelect: React.Dispatch<React.SetStateAction<number>>,
    handleDeleteTask: (taskId: number) => void
}

interface AllStagesProps {
    columns: IColumns[],
    allTasks: ITask[],
    handleTaskMoving: (direction: string, taskId: number, stage_id: number) => Promise<void>,
    toggleModalShown: () => void,
    setMColumnSelect: React.Dispatch<React.SetStateAction<number>>,
    handleDeleteTask: (taskId: number) => void
}


export default function AllStages({columns, allTasks, handleTaskMoving, toggleModalShown, setMColumnSelect, handleDeleteTask} : AllStagesProps) {
    const maxColumns = columns.length;

    function createStageColumn(column: IColumns) {
        const tasksForColumn = allTasks.filter((task) => column.id === task.stage_id);
        const propsStageColumn = {
            name: column.name,
            id: column.id,
            columnTasks: tasksForColumn,
            key: column.id,
            handleTaskMoving: handleTaskMoving,
            maxColumns: maxColumns,
            toggleModalShown: toggleModalShown,
            setMColumnSelect: setMColumnSelect,
            handleDeleteTask: handleDeleteTask
        }
        return (
            <StageColumn {...propsStageColumn}/>
        )
    }
    
    return(
        <div className="all-stage-columns">
            {columns.map(createStageColumn)}
        </div>
    )
}


function StageColumn({name, id, columnTasks, handleTaskMoving, maxColumns, toggleModalShown, setMColumnSelect, handleDeleteTask}: IStageColumn) {
    return (
        <div className="stage-column-container">
            <h3>{name} ({columnTasks.length})</h3>
            <br/>
            {columnTasks.map((item) => <Task task={item} handleTaskMoving={handleTaskMoving} maxColumns={maxColumns} key={item.id} handleDeleteTask={handleDeleteTask}/>)}
            <button className="modal-button" onClick={() => {setMColumnSelect(id); toggleModalShown()}}><FontAwesomeIcon icon={faPlus}/> Add Task</button>
        </div>
    )
};
