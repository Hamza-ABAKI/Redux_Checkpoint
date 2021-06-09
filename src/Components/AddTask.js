import React, { useState } from 'react'
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const AddTask = () => {
  const dispatch = useDispatch()
  const [newTask, setNewTask] = useState('')
  const addFunc = () => {
    if (newTask.trim()) {
      dispatch({
        type: 'add',
        payload: newTask,
      })
    }
    setNewTask('')
  }
  return (
    <div className='AddTask'>
      <Card border='light' variant='Light' style={{ width: '50rem' }}>
        <Card.Header>Add New Task</Card.Header>
        <Card.Body>
          <InputGroup className='mb-3'>
            <FormControl
              placeholder='New Task'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant='success' onClick={addFunc}>
                Add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AddTask
