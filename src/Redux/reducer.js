import { v4 as uuidv4 } from 'uuid'
const initialState = {
  tasks: [
    { id: uuidv4(), Task: 'Task 1', Done: true },
    { id: uuidv4(), Task: 'Task 2', Done: false },
    { id: uuidv4(), Task: 'Task 3', Done: true },
  ],
  Show: 'All',
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'add':
      return {
        tasks: [...state.tasks, { id: uuidv4(), Task: payload, Done: false }],
        show: state.show,
      }
    case 'delete':
      return {
        tasks: [...state.tasks].filter((task) => task.id !== payload.id),
        show: state.show,
      }
    case 'taskState':
      return {
        tasks: [...state.tasks].map((task) =>
          task.id === payload.id ? { ...task, Done: !task.Done } : task
        ),
        show: state.show,
      }
    case 'edit':
      return {
        tasks: [...state.tasks].map((task) =>
          task.id === payload.id ? { ...task, Task: payload.Task } : task
        ),
        show: state.show,
      }
    case 'show':
      return { ...state, show: payload }
    default:
      return state
  }
}

export default reducer
