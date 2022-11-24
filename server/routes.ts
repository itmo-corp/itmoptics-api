import { Application } from "express";
import exhibitsRouter from "./api/controllers/exhibits/router";

export default function routes(app: Application): void {
  app.use("/api/v1/exhibits", exhibitsRouter);
}
