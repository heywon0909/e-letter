import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes, {
  basename:'/e-letter/',
})

export default router;