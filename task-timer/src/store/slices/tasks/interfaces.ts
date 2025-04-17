// Define the set of valid action types for mutations
export const ACTIONS = {
    ADDED: 'ADDED',
    CHANGED: 'CHANGED',
    DELETED: 'DELETED',
    FETCH: 'FETCH',
    FILTER: 'FILTER',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR'
  } as const;
  
  // Type alias for action types, derived from the ACTIONS object
  export type ActionTypes = keyof typeof ACTIONS;
  
  /**
  * Represents a mutation action.
  * 
  * @template P - The type of the payload associated with the action.
  * @property type - The type of action being performed (one of the defined action types).
  * @property payload - Metadata or data associated with the mutation.
  */
  export interface IAction<P = unknown> {
    readonly type: ActionTypes;
    readonly payload: P;
  }
  
  /**
  * Represents the root state structure of the application
  */
  export interface RootState {
    tasks: TaskState;
    // Add other state slices here as needed
  }

  /**
  * Represents the state structure for tasks
  */
  export interface TaskState {
    items: ITask[];
    loading: boolean;
    error: string | null;
    filter: string | null;
  }

  /**
  * Interface for a reducer function that processes state mutations.
  * 
  * @template T - The type of the state that is being mutated.
  * @param state - The current state that will be modified.
  * @param action - An action describing what mutation is to be applied.
  * @returns The new state after applying the mutation.
  */
  export interface IMutation<T> {
    stateReducer: (state: T, action: IAction) => T;
  }
  
  /**
  * Represents the state structure with keys and values where the keys are of type S.
  * 
  * @template S - The type of keys in the state.
  * @property [key in S] - Each key in the state is of type S[keyof S], ensuring the state adheres to the defined structure.
  */
  export type IState<S> = {
    [Property in keyof S]: S[keyof S];
  }
  
  /**
  * Represents an array of state objects, where each state object conforms to IState<S>.
  * 
  * @template T - The type of keys in the state.
  * @type StateType - An array of state objects, where each state object is defined by IState<T>.
  * 
  * Note: A type is a set of valid inputs. StateType<T> ensures that the state conforms to the defined structure.
  */
  export type StateType<T> = IState<T>[];   
  
  export interface ITask {
    readonly id: number;
    title: string;
    description: string;
    readonly listId: number;
    dateStart: Date;
    dateEnd: Date;
    labels: LabelType;
    comments: CommentType;
    status: IStatus;
  }
  
export const TASK_STATUS = {
    TODO: 'todo',
    IN_PROGRESS: 'in-progress',
    COMPLETED: 'completed'
} as const;
export type IStatus = typeof TASK_STATUS[keyof typeof TASK_STATUS];


export const LABELS = {
    HIGH: 'high',
    MEDIUM: 'medium',
    LOW: 'low'
} as const;
export type ILabel = typeof LABELS[keyof typeof LABELS];
export type LabelType = ILabel[];
export type IComment = {
    id: number;
    content: string;
    date: Date;
  }
  export type CommentType = IComment[];