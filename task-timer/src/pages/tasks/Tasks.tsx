import React from "react";
import Task from "../../components/task/Task";
import { useStore } from "../../store/RootProvider";

type Props = {};

const Tasks: React.FC<Props> = () => {
  const { tasks } = useStore();
  const [expandedTaskId, setExpandedTaskId] = React.useState<number | null>(
    null
  );
  const toggleExpand = (id: number) => {
    setExpandedTaskId((prevId) => (prevId === id ? null : id));
  };
  const hanldeDelete = (id: number) => tasks.actions.deleteTask(id);
  return (
    <div>
      {tasks.state.items.map((task) => (
        <Task
          key={task.id}
          toggleExpand={toggleExpand}
          isExpanded={expandedTaskId === task.id}
          handleDelete={hanldeDelete}
          task={task}
        />
      ))}
    </div>
  );
};

export default Tasks;
