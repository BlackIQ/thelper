import { appConfig } from "$src/config/index.js";

import app from "$src";

import chalk from "chalk";

app.listen(appConfig.port, () =>
  console.log(chalk.cyan(`App is running on ${appConfig.port}`))
);
