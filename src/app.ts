import * as express from 'express'
import { Application } from 'express'
import BaseController from 'controllers/BaseController'

class App {
  public app: Application
  public port: number

  constructor(config: { port: number; middlewares: any[]; controllers: any; }) {
    this.app = express()
    this.port = config.port;

    this.middlewares(config.middlewares);
    this.routes(config.controllers);
    this.assets();
  }

  private middlewares(middlewares: any[]): void {
    middlewares.forEach(middleware => {
      this.app.use(middleware);
    });
  }

  private routes(controllers: BaseController[]): void {
    controllers.forEach(controller => {
      this.app.use(controller.endpoint, controller.router);
    });
  }

  private assets(): void {
    this.app.use(express.static('public'));
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App