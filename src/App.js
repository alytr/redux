import React from 'react'
import PropTypes from 'prop-types'
import Tasks from "./Tasks";

const TaskList = ({ Task, onTaskClick }) => (
  <ul>
    {Tasks.map(Task =>
      <Task
        key={Task.id}
        {...Task}
        onClick={() => onTaskClick(Task.id)}
      />
    )}
  </ul>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired
}

export default TaskList
