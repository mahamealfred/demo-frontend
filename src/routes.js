import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
// //
// import BlogPage from './pages/BlogPage';
// import UserPage from './pages/UserPage';
 import LoginPage from './layouts/sign-In';
 import Page404 from './pages/Page404';
// import ProductsPage from './pages/ProductsPage';
 import DashboardAppPage from './pages/DashboardAppPage';
 import RraServicePage from './pages/services/rra';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <LoginPage />,
    },
     {
        path: '/dashboard',
        element: <DashboardLayout />,
       children: [
           { element: <Navigate to="/dashboard/services" />, index: true },
           { path: 'services', element: <DashboardAppPage /> },
           { path: '/dashboard/services/rra-service', element: <RraServicePage /> },
    //     { path: 'products', element: <ProductsPage /> },
    //     { path: 'blog', element: <BlogPage /> },
         ],
      },
   
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
  ]);

  return routes;
}
