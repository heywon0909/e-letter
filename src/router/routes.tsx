import { RouteObject } from 'react-router-dom';
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import CardSelect from '../pages/CardSelect';
import Card from '../pages/Card';
import LoginPage from '../pages/LoginPage';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
    {
         path: '/',
        element: <HomePage />,
    },
    {
         path: '/select/card',
        element: <CardSelect />,
    },
    {
        path: '/login/oauth',
        element: <LoginPage />,
    }, 
    {
        path: '/card/:cardId',
        element: <Card />,
    }  
    ],
  },
];

export default paths;
