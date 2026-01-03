import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UploadPage } from './pages/UploadPage';
import { Dashboard } from './pages/Dashboard';
import { TransactionsPage } from './pages/TransactionsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UploadPage />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />
  },
  {
    path:'/categories'
  },
  {
    path:'/transactions',
    element: <TransactionsPage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
