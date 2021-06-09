import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()
  return (
    <div className='ListTask'>
      <Card border='light' variant='Light' style={{ width: '50rem' }}>
        <Card.Body>
          <Button
            variant='warning'
            onClick={() => dispatch({ type: 'show', payload: 'done' })}
          >
            Done
          </Button>
          <Button
            variant='warning'
            onClick={() => dispatch({ type: 'show', payload: 'notDone' })}
          >
            Not Done
          </Button>
          <Button
            variant='warning'
            onClick={() => dispatch({ type: 'show', payload: 'all' })}
          >
            All
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Filter
