import express from "express";
import { Application } from "express";
import path from "path";
import http from "http";
import os from "os";
import cookieParser from "cookie-parser";
import logger from "./logger";
import morgan from "morgan";
import { IDatabase } from "./database";
import cors from "cors";
import errorHandler from "../api/middlewares/error.handler";

const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(__dirname + "/../..");
    const limit = process.env.REQUEST_LIMIT || "100kb";

    app.set("appPath", root + "client");
    app.use(morgan("dev"));
    app.use(cors());

    app.use(express.json({ limit: limit }));
    app.use(express.urlencoded({ extended: true, limit: limit }));
    app.use(express.text({ limit: limit }));
    app.use("/itmoptics/", express.static(`${root}/public`));

    app.use(cookieParser(process.env.SESSION_SECRET));

    const apiSpec = path.join(__dirname, "api.yml");
    app.use(process.env.OPENAPI_SPEC, express.static(apiSpec));
  }

  router(routes: (app: Application) => void): ExpressServer {
    routes(app);
    app.use(errorHandler);
    return this;
  }

  database(db: IDatabase): ExpressServer {
    db.init();
    return this;
  }

  listen(port: number): Application {
    const welcome = (p: number) => (): void =>
      logger.info(
        `up and running in ${
          process.env.NODE_ENV || "development"
        } @: ${os.hostname()} on port: ${p}}`
      );

    http.createServer(app).listen(port, welcome(port));

    return app;
  }
}
