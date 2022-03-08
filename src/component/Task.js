import { connect } from 'react-redux'
import { toggleTask} from '../actions'
import TaskList from '../components/TaskList'

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return task
    case 'SHOW_COMPLETED':
      return tasks.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return tasks.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  tasks: getVisibleTasks(state.tasks.present, state.visibilityFilter)
})

const mapDispatchToProps = ({
  onTaskClick: toggleTask
})

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default VisibleTaskList
