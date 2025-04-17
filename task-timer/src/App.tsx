import { useRoutes } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Define routes as objects
const routes = [
  {
    path: '/',
    element: <Layout />,
    // children: [
    //   { path: '', element: <Home /> },            
    //   { path: '*', element: <NotFound /> }
    // ]
  }
];

export default function App() {
  const element = useRoutes(routes);
  return element;
}