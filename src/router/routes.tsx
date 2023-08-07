import { RouteObject } from 'react-router-dom';
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import CardSelect from '../pages/CardSelect';

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
    }  
    ],
  },
];

export default paths;
