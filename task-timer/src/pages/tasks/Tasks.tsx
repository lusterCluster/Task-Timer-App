import React from 'react'
import Task from '../../components/task/Task';
import { useStore } from '../../store/RootProvider';

type Props = {

}

const Tasks: React.FC<Props> = () => {
    const { tasks } = useStore();
  return (
    <div>
        {tasks.state.items.map(task => (
            <Task task={task} />
        ))}
    </div>
  )
}

export default Tasks