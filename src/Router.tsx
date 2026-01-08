import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UploadPage } from './pages/UploadPage';
import { Dashboard } from './pages/Dashboard';
import { TransactionsPage } from './pages/TransactionsPage';
import { Categories } from './pages/Categories';

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
    path:'/categories',
    element: <Categories />
  },
  {
    path:'/transactions',
    element: <TransactionsPage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
