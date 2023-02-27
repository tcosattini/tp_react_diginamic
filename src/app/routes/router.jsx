import { createBrowserRouter } from 'react-router-dom';
import { ErrorView, HomeView } from '../views';

const ROUTES = [
  {
    path: '/',
    element: <HomeView />,
    errorElement: <ErrorView />,
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
