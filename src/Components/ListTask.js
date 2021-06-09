import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Components/Task'
import Filter from '../Components/Filter'

const ListTask = () => {
  const todos = useSelector((state) => state.tasks)
  const show = useSelector((state) => state.show)
  const filterTask = () => {
    if (show === 'done') {
      return todos.filter((todo) => todo.Done === true)
    }
    if (show === 'notDone') {
      return todos.filter((todo) => todo.Done === false)
    }
    return todos
  }
  console.log(todos)
  return (
    <div>
      <Filter />
      {filterTask().map((todo) => {
        return <Task key={todo.id} todo={todo} />
      })}
    </div>
  )
}
export default ListTask
