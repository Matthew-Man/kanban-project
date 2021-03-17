export interface IColumns {
    id: number,
    name: string,
    order_number: number
}

export interface ITask {
    id: number,
    stage_id: number,
    task_description: string
}

export interface AllStagesProps {
    columns: IColumns[]
}