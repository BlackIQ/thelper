// ----------------------------------------------
// index.js
// ----------------------------------------------
// Export all middlewares.
// As you know, we create the middlewared like ip, key, jwt and log.
// Then export them in this file.
// All done.

import key from "$src/middlewares/key/key.middleware.js";
import log from "$src/middlewares/log/log.middleware.js";

export { key, log };
