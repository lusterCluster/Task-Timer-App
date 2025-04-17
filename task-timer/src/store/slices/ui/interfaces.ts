export interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  currentView: 'list' | 'grid';
}

export interface UISliceActions {
  toggleTheme: () => void;
  toggleSidebar: () => void;
  setView: (view: 'list' | 'grid') => void;
}

export type UIAction = 
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_VIEW'; payload: 'list' | 'grid' };