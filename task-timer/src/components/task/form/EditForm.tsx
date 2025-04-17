import React, { useState } from 'react';
import { ITask, TASK_STATUS, LABELS, ILabel, IStatus } from '../../../store/slices/tasks/interfaces';
import { formatDate } from '../../../util/dateUtil';

interface EditTaskFormProps {
  task: ITask;
  onSubmit: (task: ITask) => void;
  onCancel: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task: initialTask, onSubmit, onCancel }) => {
  const [task, setTask] = useState<ITask>(initialTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task);
  };

  // Generic change handler for input, textarea, and select elements
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Special handling for datetime inputs
    if (name === 'dateStart' || name === 'dateEnd') {
      setTask({ ...task, [name]: value });
    } 
    // Special handling for select elements that need type casting
    else if (name === 'status') {
      setTask({ ...task, [name]: value as IStatus });
    }
    else if (name === 'selectedLabel') {
      setTask({ ...task, labels: [value as ILabel] });
    }
    else {
      setTask({ ...task, [name]: value });
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={task.title}
          onChange={handleChange}
          required
          placeholder="Enter task title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Enter task description"
          rows={4}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="dateStart">Start Date</label>
          <input
            id="dateStart"
            name="dateStart"
            type="datetime-local"
            value={formatDate(task.dateStart)}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateEnd">End Date</label>
          <input
            id="dateEnd"
            name="dateEnd"
            type="datetime-local"
            value={formatDate(task.dateEnd)}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="selectedLabel"
            value={task.labels.find(label => task.labels.includes(label))} // Assuming single label selection
            onChange={handleChange}
          >
            {Object.entries(LABELS).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            {Object.entries(TASK_STATUS).map(([key, value]) => (
              <option key={key} value={value}>
                {key.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-submit">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditTaskForm