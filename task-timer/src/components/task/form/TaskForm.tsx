import React, { useState } from 'react';
import { ITask, TASK_STATUS, LABELS, ILabel, IStatus } from '../../../store/slices/tasks/interfaces';

interface TaskFormProps {
  onSubmit: (task: Omit<ITask, 'id'>) => void;
  onCancel: () => void;
  listId: number;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel, listId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateStart, setDateStart] = useState<Date>(new Date());
  const [dateEnd, setDateEnd] = useState<Date>(new Date());
  const [status, setStatus] = useState<IStatus>(TASK_STATUS.TODO);
  const [selectedLabel, setSelectedLabel] = useState<ILabel>(LABELS.MEDIUM);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      dateStart,
      dateEnd,
      status,
      labels: [selectedLabel],
      comments: [],
      listId
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter task title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          rows={4}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="dateStart">Start Date</label>
          <input
            id="dateStart"
            type="datetime-local"
            value={dateStart.toISOString().slice(0, 16)}
            onChange={(e) => setDateStart(new Date(e.target.value))}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateEnd">End Date</label>
          <input
            id="dateEnd"
            type="datetime-local"
            value={dateEnd.toISOString().slice(0, 16)}
            onChange={(e) => setDateEnd(new Date(e.target.value))}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={selectedLabel}
            onChange={(e) => setSelectedLabel(e.target.value as ILabel)}
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
            value={status}
            onChange={(e) => setStatus(e.target.value as IStatus)}
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
          Create Task
        </button>
      </div>
    </form>
  );
};