import { useRouteError } from 'react-router-dom';
import { MainLayout } from '../components/layout';

const ErrorView = () => {
  const error = useRouteError();
  return (
    <MainLayout>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>{error.message}</p>
    </MainLayout>
  );
};

export default ErrorView;
