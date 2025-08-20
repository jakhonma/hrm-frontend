import Layout from './layouts/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/login/Login';
import Organization from './pages/organization/Organization';


function App() {

  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/organization",
          element: <Organization />,
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App
