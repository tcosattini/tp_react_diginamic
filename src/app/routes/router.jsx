import { createBrowserRouter } from 'react-router-dom';
import { CommandeUpdateForm } from '../components';
import { RootLayout } from '../layout';
import {
  ClientView,
  CommandesView,
  CommandeUpdateView,
  CreateCommandView,
  ErrorView,
} from '../views';

const ROUTES = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorView />,
    children: [
      { index: true, element: <ClientView /> },
      {
        path: 'client/:client',
        element: <CommandesView />,
        action: CommandeUpdateForm.action,
      },
      {
        path: 'commande/create',
        element: <CreateCommandView />,
        errorElement: <ErrorView />,
      },
      {
        path: 'commande/:commande/update',
        element: <CommandeUpdateView />,
        loader: CommandeUpdateView.loader,
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
