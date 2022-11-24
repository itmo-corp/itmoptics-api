import logger from "../../common/logger";
import Exhibit from "../models/exhibit";

export class ExhibitsService {
  async getAll(): Promise<Exhibit[]> {
    logger.info("fetch all exhibits");
    return await Exhibit.findAll({ order: [['createdAt', 'DESC']]});
  }

  async getById(id: number): Promise<Exhibit> {
    logger.info(`fetch exhibit with id ${id}`);
    return await Exhibit.findByPk(id);
  }

  async destroy(id: number): Promise<boolean> {
    logger.info(`destroy exhibit with id ${id}`);
    return 1 == await Exhibit.destroy({ where: { id: id } });
  }

  async create(data): Promise<Exhibit> {
    logger.info(`create exhibit with data ${data}`);
    return await Exhibit.create({ name: data.name });
  }
}

export default new ExhibitsService();
