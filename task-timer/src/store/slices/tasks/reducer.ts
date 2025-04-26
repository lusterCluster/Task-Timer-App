import { generateRandomId } from "../../../util/commonUtil";
import { IAction, IMutation, ITask, TaskState, ACTIONS } from "./interfaces";

/**
 * A reducer function for managing tasks.
 *
 * @remarks
 * This reducer accepts actions of type IAction, with the following properties:
 * - type: The type of action being performed. Must be one of the values in the ACTIONS object.
 * - payload: The data associated with the action. The type of this property depends on the type of action.
 *
 * The reducer returns a new state object containing the tasks array and loading/error states.
 *
 * @param state - The current state of the tasks.
 * @param action - The action to be applied to the state.
 * @returns - The new state.
 */
export const taskReducer: IMutation<TaskState> = {
  stateReducer: (state: TaskState, action: IAction<any>): TaskState => {
    switch (action.type) {
      case ACTIONS.ADDED:
        return {
          ...state,
          items: [
            ...state.items,
            {
              id: generateRandomId(6),
              title: action.payload.title,
              description: action.payload.description,
              listId: action.payload.listId,
              dateStart: action.payload.dateStart || new Date(),
              dateEnd: action.payload.dateEnd || new Date(),
              labels: action.payload.labels || [],
              comments: action.payload.comments || [],
              status: action.payload.status,
            },
          ],
          error: null,
        };
      case ACTIONS.CHANGED:
        return {
          ...state,
          items: state.items.map((task) =>
            task.id === action.payload.id
              ? { ...task, ...action.payload }
              : task
          ),
          error: null,
        };
      case ACTIONS.DELETED:
        return {
          ...state,
          items: state.items.filter((task) => task.id !== action.payload),
          error: null,
        };
      case ACTIONS.FETCH:
        return {
          ...state,
          items: action.payload,
          loading: false,
          error: null,
        };
      case ACTIONS.FILTER:
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  },
};
