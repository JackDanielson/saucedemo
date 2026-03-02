const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    reporterOptions: {
      charts: true,             
      reportPageTitle: 'Saucedemo - Cypress Tests',
      embeddedScreenshots: true, 
      inlineAssets: true,        
      saveAllAttempts: false,   
    },
    baseUrl: 'https://www.saucedemo.com'
  },
});
