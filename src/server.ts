import App from 'app';

import * as bodyParser from 'body-parser';
import { logger, jsonApi, errorHandler } from 'middleware';

import { LoginController } from 'controllers';

const app = new App({
    port: 5000,
    controllers: [
        new LoginController(),
    ],
    middlewares: [
      jsonApi,
      bodyParser.json({ type: 'application/vnd.api+json' }),
      bodyParser.urlencoded({ type: 'application/vnd.api+json', extended: true }),
      logger,
      errorHandler,
    ],
})

app.listen();
