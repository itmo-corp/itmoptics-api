import logger from "../../common/logger";
import { Request } from "express";

export class AuthService {
  authenticate(req: Request) {
    const ip = req.socket.remoteAddress;

    logger.info(req)
    const password = req.query.password;
    logger.info(`authenticating password ${password} by ip ${ip}`);

    if (password != process.env.ADMIN_PASSWORD) {
      return { errors: [{ message: "You're not authenticated" }]}
    }

    return false;
  }
}

export default new AuthService();
