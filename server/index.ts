import "./common/env";
import Database from "./common/database";
import Server from "./common/server";
import routes from "./routes";
import sequelize from "./common/sequelize";

const port = parseInt(process.env.PORT || "3000");
const database = new Database(sequelize);

export default new Server().database(database).router(routes).listen(port);
