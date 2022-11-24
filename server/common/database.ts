import logger from "./logger";
import { Sequelize } from "sequelize";

export interface IDatabase {
  init(): void;
}

export default class Database implements IDatabase {
  database: Sequelize;

  constructor(db: Sequelize) {
    db
      .authenticate()
      .then(() => {
        logger.info("Database connected.");
      })
      .catch((err) => {
        logger.error("Database connection error. Please make sure you specified the right file.\n" + err);
        process.exit(1);
    });

    this.database = db;
  }

  init(): void {
    this.database.sync()
      .then(() => {
        logger.info("Database synchronized.");
      })
      .catch((err) => {
        logger.info(`Database synchronization error: ${err}`);
      })
  }
}
