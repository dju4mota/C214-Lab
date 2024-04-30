import { Task, UpdateTask } from "../models/Task";
import { ToDoListRepositoryInterface } from "../repository/ToDoListRepositoryInterface";
import { ToDoListInterface } from "./interfaces/ToDoListInterface";


export class ToDoList implements ToDoListInterface{

  private repository: ToDoListRepositoryInterface  
  constructor (toDoListRepository: ToDoListRepositoryInterface) {
    this.repository = toDoListRepository
  }
    
    add (task: Task) {
        const missingProperties = ['title', 'description', 'targetDate'].filter(
          (prop) => !Object.keys(task).includes(prop)
        )
        try {
          if (missingProperties.length > 0) {
            return 'Missing properties in task object'
          }
          const response = this.repository.create(task)
          if(response.error){
            return "error creating"
          }
          return "task created!"
        } catch (error) {
          return new Error(JSON.stringify(error))
        }
    }
    
    getTasks(){
      const response = this.repository.getAll()
      if(response.error){
        return "error getting all"
      }
      return response.success
    }

    updateTask ( task: UpdateTask) {
      this.repository.update(task)
    } 
    
    removeTask (index: number) {
      this.repository.delete(index)
    }

}