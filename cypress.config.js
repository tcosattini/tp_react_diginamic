const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    base_url: "http://localhost:3000",
    client_url: "/client",
    api_url: "http://localhost:8000",
    api_page_param: "/?page=",
  },
});
