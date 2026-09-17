import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.hasznaltauto.hu",

    viewportWidth: 1440,
    viewportHeight: 900,

    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
    },
  },
});