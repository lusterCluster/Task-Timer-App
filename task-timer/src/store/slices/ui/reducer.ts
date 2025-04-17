import { UIState, UIAction } from './interfaces';

export const uiReducer = {
  stateReducer: (state: UIState, action: UIAction): UIState => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light'
        };
      case 'TOGGLE_SIDEBAR':
        return {
          ...state,
          sidebarOpen: !state.sidebarOpen
        };
      case 'SET_VIEW':
        return {
          ...state,
          currentView: action.payload
        };
      default:
        return state;
    }
  }
};