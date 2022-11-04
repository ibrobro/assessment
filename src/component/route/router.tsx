import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import MENUS from '../../data/menu';
import MainLayout from '../layout/MainLayout';
import NotFound from './NotFound';


const RegisterPage = React.lazy(() => import('../page/RegisterPage'))
const FindSomething = React.lazy(() => import('../page/FindSomething'));
const RegisterOk = React.lazy(() => import('../page/RegisterOk'));

const router = createBrowserRouter([
  {
    path: MENUS.home.link,
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <RegisterPage />,
      },
      {
        path: MENUS.find.link,
        element: <FindSomething />,
      },
      {
        path: MENUS.registerOk.link,
        element: <RegisterOk />,
      }
    ]
  },
])

export default router;
