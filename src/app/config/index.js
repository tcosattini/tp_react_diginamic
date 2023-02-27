import environement from './environement';

const config = {
  ...environement,
  api: {
    url: "http://localhost:8000",
  },
  // Add here other config variables and overrides
};

export default config;
