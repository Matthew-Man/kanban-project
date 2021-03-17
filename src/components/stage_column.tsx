import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./components.css";
import { Task } from "./task";
import { AllStagesProps, ITask } from "./interface";
import { useEffect, useState } from "react";

interface IStageColumn {
    name: string,
    id: number,
    columnSize: number
}

function StageColumn({name, id, columnSize}: IStageColumn) {
    const [tasks, setTasks] = useState<ITask[]>([])

    async function getTasks() {
        const res = await fetch(`http://localhost:4000/tasks/${id}`);
        const {data} = await res.json();
        setTasks(data) 
    }

    //Ask in OH why this is happening
    useEffect(() => {
        getTasks()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="stage-column-container">
            <h3>{name} (2) (id:{id})</h3>
            <br/>
            {tasks.map((item) => <Task description={item.task_description} columnSize={columnSize} stage_id={id} task_id={item.id}/>)}
            <button className="add-task"><FontAwesomeIcon icon={faPlus}/> Add Task</button>
        </div>
    )
};


export default function AllStages({columns} : AllStagesProps) {
    const numOfColumns = columns.length;
    return(
        <div className="all-stage-columns">
            {columns.map((item) => <StageColumn name={item.name} id={item.id} columnSize={numOfColumns}/>)}
        </div>
    )
}