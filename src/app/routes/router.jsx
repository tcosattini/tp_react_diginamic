import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layout/Root/RootLayout';
import {
  ClientView,
  CommandesView,
  CommandeUpdateView,
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
        path: 'client',
        // errorElement:
        children: [
          //Liste des commandes d'un client sélectionné
          {
            path: ':client',
            element: <CommandesView />,
            children: [
              {
                path: 'add',
                // element:
              },
            ],
          },
        ],
      },
      {
        path: 'commande',
        children: [
          {
            path: ':commande',
            children: [
              {
                //Modification d'une commande
                path: 'update',
                element: <CommandeUpdateView />,
                loader: CommandeUpdateView.loader,
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
