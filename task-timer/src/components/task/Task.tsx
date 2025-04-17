import React from 'react'
import { ITask } from '../../store/slices/tasks/interfaces'

type Props = {
    task: ITask    
}

const formatDate = (date: Date | string) => {
  if (date instanceof Date) {
    return date.toISOString();
  }
  return date;
};

const Task: React.FC<Props> = ({ task }) => {
  return (
    <div key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{formatDate(task.dateStart)}</p>
        <p>{formatDate(task.dateEnd)}</p>
        <p>{task.status}</p>
        <p>{task.labels.join(', ')}</p>
        <p>{task.comments.map(c => c.content).join(', ')}</p>
    </div>
  )
}

export default Task