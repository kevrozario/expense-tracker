import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UploadPage } from './pages/UploadPage';
import { Dashboard } from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UploadPage />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
