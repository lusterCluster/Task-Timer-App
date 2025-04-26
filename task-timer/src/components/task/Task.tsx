import React, { useState } from "react";
import { ITask } from "../../store/slices/tasks/interfaces";
import { useNavigate } from "react-router-dom";
import { calculateDuration, formatDateForDisplay } from "../../util/dateUtil";
import style from "./Task.module.css";
import AddMoreButton from "../buttons/icon/AddMoreButton";

type Props = {
  task: ITask;
  handleDelete: (id: number) => void;
  isExpanded: boolean;
  toggleExpand: (id: number) => void;
};

const Task: React.FC<Props> = ({
  task,
  handleDelete,
  isExpanded,
  toggleExpand,
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  const handleEdit = () => {
    navigate("/edit-task", { state: task });
    setMenuOpen(false); // Close menu after action
  };

  const handleDeleteClick = () => {
    handleDelete(task.id);
    setMenuOpen(false); // Close menu after action
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const formatDate = (date: string | Date): string => {
    const [formattedDate, formattedTime] = formatDateForDisplay(date);
    return `${formattedDate} ${formattedTime}`;
  };

  const getTruncatedTitle = (title: string): string => {
    return title.length > 20 ? `${title.slice(0, 20)}...` : title;
  };

  return (
    <div
      className={style.taskCardContainer}
      onClick={() => toggleExpand(task.id)} // Expand/collapse on card click
    >
      <div className={style.taskCard}>
        {/* Header Section */}
        <div className={style.taskCardHeader}>
          <h3 className={style.heading}>
            {isExpanded ? task.title : getTruncatedTitle(task.title)}
          </h3>
          {/* AddMore Button */}
          <div className={style.dropdown}>
            <AddMoreButton
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click event from firing
                toggleMenu();
              }}
              aria-label="More actions"
            />
            {menuOpen && (
              <div className={style.dropdownMenu}>
                <button onClick={handleEdit} className={style.menuItem}>
                  Edit
                </button>
                <button onClick={handleDeleteClick} className={style.menuItem}>
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Conditionally Render Content */}
        {isExpanded && (
          <>
            {/* Description Section */}
            <p className={style.description}>{task.description}</p>

            {/* Deadline Section */}
            <div className={style.deadlineContainer}>
              <div className={style.deadline}>
                <span className={style.label}>Start</span>
                <div className={style.date}>{formatDate(task.dateStart)}</div>
              </div>
              <div className={style.deadline}>
                <span className={style.label}>End</span>
                <div className={style.date}>{formatDate(task.dateEnd)}</div>
              </div>
              <div className={style.deadline}>
                <span className={style.label}>Duration</span>
                <div className={style.date}>
                  {calculateDuration(task.dateStart, task.dateEnd)}
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className={style.taskCardFooter}>
              <p>
                Status: <span className={style.status}>{task.status}</span>
              </p>
              <p>
                Labels:{" "}
                <span className={style.labels}>{task.labels.join(", ")}</span>
              </p>
              <p>
                Comments:{" "}
                <span className={style.comments}>
                  {task.comments.map((c) => c.content).join(", ")}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
