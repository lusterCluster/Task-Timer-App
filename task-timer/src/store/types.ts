import { TaskState } from './slices/tasks/interfaces';
import { TaskSliceActions } from './slices/tasks/useTaskDispatcher';
import { UISliceActions, UIState } from './slices/ui/interfaces';


// Combined state type for the entire application
export interface RootState {
  tasks: {
    state: TaskState;
    actions: TaskSliceActions;
  };
  ui: {
    state: UIState;
    actions: UISliceActions;
  };
}

// Root context type
export type RootContextType = RootState | undefined;