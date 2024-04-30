
import { Task, UpdateTask } from "../../models/Task"

export interface ToDoListInterface {

    add : (task: Task) =>  String | Error
    getTasks : () => Task[] | String | unknown
    updateTask : (task: UpdateTask) => void 
    removeTask : (index: number) => void 
}