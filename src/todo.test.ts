/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToDoList } from './TodoList'

const anyTask = {
  title: 'any_title',
  description: 'any_description',
  targetDate: '01/01/2025',
  type: 'any_type',
  priority: '1',
  subTasks: []
}

describe('ToDoList', () => {
  describe('Testing add', () => {
    test('should add a new task to the list', () => {
      const todoInstance = new ToDoList()
      todoInstance.add(anyTask)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([anyTask])
    })

    test('should add a valid tasks', () => {
      const todoInstance = new ToDoList()
      const invalidValue: any = {
        invalidField: 'invalidValue'
      }
      todoInstance.add(invalidValue)
      const tasks = todoInstance.getTasks()
      expect(tasks).toEqual([])
    })

    test('should update the title of a task', () => {
        const todoInstance = new ToDoList()
        todoInstance.add(anyTask)

        todoInstance.updateTask(0,{title: 'title_changed',})
        
        const tasks = todoInstance.getTasks()
        expect(tasks[0].title).toEqual('title_changed')
      })

      test('should update the targetDate of a task', () => {
        const todoInstance = new ToDoList()
        todoInstance.add(anyTask)

        todoInstance.updateTask(0,{targetDate: '03/05/2025',})
        
        const tasks = todoInstance.getTasks()
        expect(tasks[0].targetDate).toEqual('03/05/2025')
      })

      test('should remove a task', () => {
        const todoInstance = new ToDoList()
        todoInstance.add(anyTask)
        
        todoInstance.removeTask(0)

        const tasks = todoInstance.getTasks()
        expect(tasks).toEqual([])
      })
      

  })
})