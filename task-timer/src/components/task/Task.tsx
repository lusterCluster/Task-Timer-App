import React from 'react'
import { ITask } from '../../store/slices/tasks/interfaces'
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../util/dateUtil';

type Props = {
    task: ITask    
}



const Task: React.FC<Props> = ({ task }) => {
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate("/edit-task", { state: { task } });
  }
  return (
    <div key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{formatDate(task.dateStart)}</p>
        <p>{formatDate(task.dateEnd)}</p>
        <p>{task.status}</p>
        <p>{task.labels.join(', ')}</p>
        <p>{task.comments.map(c => c.content).join(', ')}</p>
        <button onClick={handleEdit} type="button">Edit</button>
    </div>
  )
};        

export default Task