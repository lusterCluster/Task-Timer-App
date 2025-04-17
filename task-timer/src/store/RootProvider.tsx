import React, { createContext, useContext, useEffect } from "react";
import { RootContextType } from "./types";
import { useUIMutation } from "./slices/ui/useUIMutation";
import useTaskDispatcher, { initialTaskState } from "./slices/tasks/useTaskDispatcher";
import { initialUIState } from "./slices/ui/useUIMutation";

const STORAGE_KEY = {
  TASKS: 'taskTimer_tasks',
  UI: 'taskTimer_ui'
};

const loadFromStorage = (key: string, initialState: any) => {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : initialState;
};

const RootContext = createContext<RootContextType>(undefined);

export const RootProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = {
    tasks: useTaskDispatcher(loadFromStorage(STORAGE_KEY.TASKS, initialTaskState)),
    ui: useUIMutation(loadFromStorage(STORAGE_KEY.UI, initialUIState)),
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY.TASKS, JSON.stringify(value.tasks.state));
  }, [value.tasks.state]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY.UI, JSON.stringify(value.ui.state));
  }, [value.ui.state]);

  return <RootContext.Provider value={value}>{children}</RootContext.Provider>;
};

export const useStore = () => {
  const context = useContext(RootContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a RootProvider");
  }
  return context;
};
