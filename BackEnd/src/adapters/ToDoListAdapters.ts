import { Task, UpdateTask } from "../models/Task";
import { ToDoListRepositoryInterface } from "../repository/ToDoListRepositoryInterface";

export class ToDoListAdapter implements ToDoListRepositoryInterface {
  tasks: Task [] = []

    create(task : Task){
      try{
        this.tasks.push(task)
        return{
          success: true,
          error: null
        }
      } catch (error){
        return {
          success: null,
          error: "cannot create task"
        }
      }
    }
    getAll(){
      try{
        return {
          success: this.tasks,
          error: null
        }
      } catch(error){
        return {
          success: null,
          error: "cannot get tasks"
        }
      }
    }
    update(task: UpdateTask) {
        try{
          const toUpdateTasks = this.tasks.map(item => item.id === task.id ? { ... item, ...task} : item)
          this.tasks = toUpdateTasks
          return{
            success: true,
            error: null
          } 
        }
          catch (error){ 
            return {
              success: null,
              error: "cannot update task"
            }
          }
    }

    delete (id: number) {
      try{
        const toDeleteTask = this.tasks.filter(item => item.id !== id)
        this.tasks = toDeleteTask
        return{
          success: true,
          error: null
        } 
      }
        catch (error){ 
          return {
            success: null,
            error: true
          }
        }
  }
}