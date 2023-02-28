const production = {
  production: true,
  api: {
    url: 'https://production.api.url',
  },
};

const development = {
  production: false,
  api: {
    url: 'http://localhost:8000',
  },
};

const environement =
  process.env.NODE_ENV === 'production' ? production : development;

export default environement;
