import { Sequelize } from "sequelize";

const connection =
  process.env.NODE_ENV === "production"
    ? process.env.DB_PROD
    : process.env.NODE_ENV === "test"
      ? process.env.DB_TEST
      : process.env.DB_DEV;


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: connection,
});

export default sequelize;
