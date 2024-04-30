/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from './TodoList'
import { ToDoListRepositoryInterface } from '../repository/ToDoListRepositoryInterface'
import { Task, UpdateTask } from '../models/Task'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

const makeRepositoryStub = (): ToDoListRepositoryInterface => {

  class ToDoListStub implements ToDoListRepositoryInterface {

    create(task : Task) {
        return {
          success: true,
          error: null
        }
    }
    getAll(){
      return {
        success: [anyTask],
        error: null
      }
    }
    update(task: UpdateTask) {
      return {
        success: true,
        error: null
      }
    }
  
    delete (id: number) {
      return {
        success: true,
        error: null
      }
    }
  
  }
  return new ToDoListStub()
}




describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const mock =  makeRepositoryStub()
      const todoInstance = new ToDoList(mock)
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
      const mock = makeRepositoryStub()
      const todoInstance = new ToDoList(mock)
      const invalidValue: any = {
        invalidField: 'invalidValue'
      }
      const response  = todoInstance.add(invalidValue)
      expect(response).toEqual('Missing properties in task object')
    })

    // test('should update the title of a task', () => {
    //     const todoInstance = new ToDoList()
    //     todoInstance.add(anyTask)

    //     todoInstance.updateTask(0,{title: 'title_changed',})
        
    //     const tasks = todoInstance.getTasks()
    //     expect(tasks[0].title).toEqual('title_changed')
    //   })

    //   test('should update the targetDate of a task', () => {
    //     const todoInstance = new ToDoList()
    //     todoInstance.add(anyTask)

    //     todoInstance.updateTask(0,{targetDate: '03/05/2025',})
        
    //     const tasks = todoInstance.getTasks()
    //     expect(tasks[0].targetDate).toEqual('03/05/2025')
    //   })

    //   test('should remove a task', () => {
    //     const todoInstance = new ToDoList()
    //     todoInstance.add(anyTask)
        
    //     todoInstance.removeTask(0)

    //     const tasks = todoInstance.getTasks()
    //     expect(tasks).toEqual([])
    //   })
      

  })

  describe('getTasks', () => {
    test('should initialize tasks with an empty array', () => {
      const mock = makeRepositoryStub()
      const todoInstance = new ToDoList(mock)
      // mock especifico para esse caso
      jest.spyOn(mock, 'getAll').mockReturnValueOnce({
        success: [],
        error: null
      })    
      const response  = todoInstance.getTasks()
      expect(response).toEqual([])
    })
  })
})