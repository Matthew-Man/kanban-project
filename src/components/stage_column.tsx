import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
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
    handleDeleteTask: (taskId: number) => void,
    deleteColumn: (id: number) => void
}

interface AllStagesProps {
    columns: IColumns[],
    allTasks: ITask[],
    handleTaskMoving: (direction: string, taskId: number, stage_id: number) => Promise<void>,
    toggleModalShown: () => void,
    setMColumnSelect: React.Dispatch<React.SetStateAction<number>>,
    handleDeleteTask: (taskId: number) => void,
    deleteColumn: (id: number) => void
}


export default function AllStages({columns, allTasks, handleTaskMoving, toggleModalShown, setMColumnSelect, handleDeleteTask, deleteColumn} : AllStagesProps) {
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
            handleDeleteTask: handleDeleteTask,
            deleteColumn: deleteColumn
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


function StageColumn({name, id, columnTasks, handleTaskMoving, maxColumns, toggleModalShown, setMColumnSelect, handleDeleteTask, deleteColumn}: IStageColumn) {
    async function handleDeleteColumn() {
        if (columnTasks.length > 0) {
            alert("Oops! It looks like you still have tasks in this column/stage 🤔 Please move them to another column before trying to delete...")
        } else if (columnTasks.length === 0) { //Validating to be sure length is 0
            deleteColumn(id);
        }
    }

    return (
        <div className="stage-column-container">
            <div className="column-head">
                <h3>{name} ({columnTasks.length})</h3>
                <div className="column-menu no-focus">
                    <p>Delete column?</p>
                    <button className="column-menu no-focus" title="Delete column?" onClick={() => handleDeleteColumn()}><FontAwesomeIcon icon={faTimes}/></button>
                </div>
            </div>
            <br/>
            {columnTasks.map((item) => <Task task={item} handleTaskMoving={handleTaskMoving} maxColumns={maxColumns} key={item.id} handleDeleteTask={handleDeleteTask}/>)}
            <button className="modal-button" onClick={() => {setMColumnSelect(id); toggleModalShown()}}><FontAwesomeIcon icon={faPlus}/> Add Task</button>
        </div>
    )
};
