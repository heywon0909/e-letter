import { RouteObject } from 'react-router-dom';
import Root from '../pages/Root';
import HomePage from '../pages/HomePage';
import CardSelect from '../pages/CardSelect';
import Card from '../pages/Card';
import LoginPage from '../pages/LoginPage';
import CardComplete from '../pages/CardComplete';
import AuthRoute from '../components/AuthRoute';
import CardShare from '@/pages/CardShare';

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
      element: (<AuthRoute>
                <CardSelect />
              </AuthRoute>),
    },
    {
        path: '/login/oauth',
        element: <LoginPage />,
    }, 
    {
        path: '/card/:cardId/:cardImgNum',
      element: (<AuthRoute>
                <Card />
                </AuthRoute>),
    },
    {
      path: '/card/complete/:cardId/:uid',
      element:(
        <AuthRoute>
          <CardComplete />
        </AuthRoute>  
        )
      },
     {
      path: '/card/share/:cardId/:uid',
      element:(
          <CardShare /> 
        )
    }
    ],
  },
];

export default paths;
