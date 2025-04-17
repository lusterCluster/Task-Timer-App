import { useReducer } from 'react';
import { UIState, UISliceActions } from './interfaces';
import { uiReducer } from './reducer';
export const initialUIState: UIState = {
  theme: 'light',
  sidebarOpen: false,
  currentView: 'list'
};

export function useUIMutation(initialState: UIState) {
  const [state, dispatch] = useReducer(uiReducer.stateReducer, initialState);

  const actions: UISliceActions = {
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    toggleSidebar: () => dispatch({ type: 'TOGGLE_SIDEBAR' }),
    setView: (view) => dispatch({ type: 'SET_VIEW', payload: view })
  };

  return { state, actions };
}