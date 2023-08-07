import { RouteObject } from 'react-router-dom';
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';

const paths: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
    {
         path: '/',
        element: <HomePage />,
    }
    ],
  },
];

export default paths;
