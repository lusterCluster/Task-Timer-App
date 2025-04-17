import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskForm } from '../../components/task/form/TaskForm';
import { ACTIONS, IAction, ITask, StateType } from '../../store/slices/tasks/interfaces';
import { useStore } from '../../store/RootProvider';




const NewTask: React.FC = () => {
  const navigate = useNavigate();
  const {tasks} = useStore();

  const handleSubmit = (taskData: Omit<ITask, 'id'>) => {
    tasks.actions.addTask(taskData);
    navigate('/tasks'); // Redirect to tasks list after creation
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="new-task-page">
      <h1>Create New Task</h1>
      <TaskForm listId={1} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}; 



export default NewTask;