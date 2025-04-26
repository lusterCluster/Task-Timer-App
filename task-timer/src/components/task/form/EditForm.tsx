import React, { useState } from "react";
import {
  ITask,
  TASK_STATUS,
  LABELS,
  ILabel,
  IStatus,
} from "../../../store/slices/tasks/interfaces";
import { formatDateForInput } from "../../../util/dateUtil";
import styles from "./Styles.module.css"; // Import the new styles

interface EditTaskFormProps {
  task: ITask;
  onSubmit: (task: ITask) => void;
  onCancel: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({
  task: initialTask,
  onSubmit,
  onCancel,
}) => {
  const [task, setTask] = useState<ITask>(initialTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(task);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "dateStart" || name === "dateEnd") {
      setTask({ ...task, [name]: value });
    } else if (name === "status") {
      setTask({ ...task, [name]: value as IStatus });
    } else if (name === "selectedLabel") {
      setTask({ ...task, labels: [value as ILabel] });
    } else {
      setTask({ ...task, [name]: value });
    }
  };

  return (
    <div className={styles.cardContainer}>
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={task.title}
            onChange={handleChange}
            className={styles.inputField} // Unified className
            maxLength={50}
            required
            placeholder="Enter task title"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            className={styles.inputField} // Unified className
            placeholder="Enter task description"
            rows={4}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="dateStart">Start Date</label>
            <input
              id="dateStart"
              name="dateStart"
              type="datetime-local"
              value={formatDateForInput(task.dateStart)}
              onChange={handleChange}
              className={styles.inputField} // Unified className
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="dateEnd">End Date</label>
            <input
              id="dateEnd"
              name="dateEnd"
              type="datetime-local"
              value={formatDateForInput(task.dateEnd)}
              onChange={handleChange}
              className={styles.inputField} // Unified className
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="selectedLabel"
              value={task.labels[0]}
              onChange={handleChange}
              className={styles.inputField} // Unified className
            >
              {Object.entries(LABELS).map(([key, value]) => (
                <option key={key} value={value}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={task.status}
              onChange={handleChange}
              className={styles.inputField} // Unified className
            >
              {Object.entries(TASK_STATUS).map(([key, value]) => (
                <option key={key} value={value}>
                  {key.replace("_", " ")}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.formActions}>
          <button type="button" className={styles.btnCancel} onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className={styles.btnSubmit}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskForm;
