import { useRouteError } from 'react-router-dom';

const ErrorView = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full root-layout">
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorView;
