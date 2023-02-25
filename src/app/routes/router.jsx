import { ErrorView, HomeView } from '@views';
import { createBrowserRouter } from 'react-router-dom';

const ROUTES = [
  {
    path: '.',
    element: <HomeView />,
    errorElement: <ErrorView />,
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
