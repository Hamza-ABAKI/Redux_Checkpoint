import React, { useState } from 'react'
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const Task = ({ todo }) => {
  const [task, setTask] = useState(todo.Task)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className='Task'>
      <Card border='light' variant='Light' style={{ width: '50rem' }}>
        <Card.Body>
          <InputGroup className='mb-3'>
            {edit ? (
              <div className='editBox'>
                <FormControl
                  placeholder={todo.Task}
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </div>
            ) : (
              <InputGroup.Text style={{ width: '29rem' }}>
                {task}
              </InputGroup.Text>
            )}
            <InputGroup.Append>
              <InputGroup.Text
                className='checktxt'
                style={
                  todo.Done ? { backgroundColor: 'green', color: 'white' } : {}
                }
              >
                Done
              </InputGroup.Text>
              <InputGroup.Checkbox
                aria-label='Checkbox for following text input'
                onChange={() => {
                  dispatch({
                    type: 'taskState',
                    payload: todo,
                  })
                }}
                checked={todo.Done}
              />
              {/* Edit */}
              <Button
                className='Edit'
                variant='info'
                onClick={() => {
                  setEdit(!edit)
                  dispatch({
                    type: 'edit',
                    payload: todo,
                  })
                }}
              >
                {edit ? 'Update' : 'Edit'}
              </Button>
              {/* Delete */}
              <Button
                className='Delete'
                variant='danger'
                onClick={() => dispatch({ type: 'delete', payload: todo })}
              >
                Delete
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Task
