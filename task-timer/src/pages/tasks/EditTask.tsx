import React from 'react'
import { useLocation, useNavigation } from 'react-router'
import EditForm from '../../components/task/form/EditForm'
import { useStore } from '../../store/RootProvider'
import { ITask } from '../../store/slices/tasks/interfaces'


const EditTask = () => {
  const location = useLocation()
  const id = location.state.id
  const {tasks} = useStore()
  const task = tasks.state.items.find(task => task.id === id)
  const handleSubmit = (taskData: ITask) => {
      tasks.actions.updateTask(taskData);
      
    };
    return (
    <div>
        <EditForm onCancel={() => {}} onSubmit={handleSubmit} task={task!} />
    </div>
  )
}
export default EditTask