import { useRoutes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { TaskForm } from './components/task/form/TaskForm';
import NewTask from './pages/tasks/NewTask';
import Tasks from './pages/tasks/Tasks';

// Define routes as objects
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {path:'new-task', element: <NewTask />},
      { path: 'tasks', element: <Tasks /> },            
      // { path: '*', element: <NotFound /> }
    ]
  }
];

export default function App() {
  const element = useRoutes(routes);
  return element;
}