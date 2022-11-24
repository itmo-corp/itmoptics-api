import { Request, Response, NextFunction } from "express";
import ExhibitsService from "../../services/exhibits.service";
import AuthService from "../../services/auth.service";

export class Controller {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const exhibits = await ExhibitsService.getAll();
      return res.status(200).json(exhibits);
    } catch (err) {
      return next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const exhibit = await ExhibitsService.getById(parseInt(req.params.id));
      if (exhibit) {
        return res.status(200).json(exhibit);
      }
      const errors = [{ message: "Exhibit not found" }];
      return res.status(404).json({ errors });
    } catch (err) {
      return next(err);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const auth = AuthService.authenticate(req)
      if (auth) return res.status(401).json(auth);

      const exhibit = await ExhibitsService.create(req.body);
      return res.status(201).json(exhibit).location(`/api/v1/exhibits/${exhibit.id}`).end();
    } catch (err) {
      return next(err);
    }
  }

  async destroy(req: Request, res: Response, next: NextFunction) {
    try {
      const auth = AuthService.authenticate(req)
      if (auth) return res.status(401).json(auth);

      const isDestroyed = await ExhibitsService.destroy(parseInt(req.params.id));
      if (isDestroyed) {
        return res.sendStatus(200);
      }
      const errors = [{ message: "Exhibit cannot be destroyed" }];
      return res.status(409).json({ errors });
    } catch (err) {
      return next(err);
    }
  }
}

export default new Controller();
