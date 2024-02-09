// ----------------------------------------------
// app.js
// ----------------------------------------------
// Application configurations.
// Here we export application data, like environment, is it published, port and stuff.

import env from "$src/env/index.js";

export default {
  environment: env.APP_ENVIRONMENT,
  port: env.APP_PORT,
  key: env.APP_KEY,
  published: env.APP_ENVIRONMENT === "production" ? true : false,
};
