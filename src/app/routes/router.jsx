import { createBrowserRouter } from 'react-router-dom';
import { ErrorView, HomeView, CommandesView } from '../views';

const ROUTES = [
  {
    path: '/',
    element: <HomeView />,
    errorElement: <ErrorView />,
  },
  {
    //Liste des commandes d'un client sélectionné
    path: '/client/:client',
    element: <CommandesView />,
    // errorElement:
  },
  {
    //Ajout d'une commande pour le client sélectionné
    path: '/client/:client/add',
    // element:
    // errorElement:
  },
  {
    //Modification d'une commande
    path: '/update/:commande',
    // element:
    // errorElement:
  },
];

const router = createBrowserRouter(ROUTES);

export default router;
