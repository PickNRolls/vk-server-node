import { Router } from "express";

export default class BaseController {
  public readonly router: Router = Router();
  public endpoint: string;

  protected initRoutes: () => void;

  public constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.initRoutes();
  }
}
