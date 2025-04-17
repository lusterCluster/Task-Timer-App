import { useReducer } from "react"
import { taskReducer } from "./reducer";
import { ITask, TaskState } from "./interfaces";

export const initialTaskState:TaskState = {
  items: [],
  loading: false,
  error: null,
  filter: null
}

export interface TaskSliceActions {
  addTask: (task: Omit<ITask, 'id'>) => void;
  updateTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setFilter: (filter: string | null) => void;
}

function useTaskDispatcher(initialState: TaskState): { state: TaskState; actions: TaskSliceActions } {
  const [state, dispatch] = useReducer(taskReducer.stateReducer, initialState);
  
  const actions: TaskSliceActions = {
    addTask: (task) => dispatch({ type: 'ADDED', payload: task }),
    updateTask: (task) => dispatch({ type: 'CHANGED', payload: task }),
    deleteTask: (id) => dispatch({ type: 'DELETED', payload: id }),
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
    setFilter: (filter) => dispatch({ type: 'FILTER', payload: filter })
  };

  return { state, actions };
}

export default useTaskDispatcher;