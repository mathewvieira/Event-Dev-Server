import getPool from "../shared/utils/pool.Utils.js";

class EventosRepository {
  async findMany() {
    try {
      return await getPool().evento.findMany();
    } catch (err) {
      throw err;
    }
  }

  async findById(id) {
    try {
      return await getPool().evento.findUnique({
        where: { id: parseInt(id) },
      });
    } catch (err) {
      throw err;
    }
  }

  async create(event) {
    try {
      return await getPool().evento.create({
        data: event,
      });
    } catch (err) {
      throw err;
    }
  }

  async update(id, data) {
    try {
      return await getPool().evento.update({
        where: { id: parseInt(id) },
        data: data,
      });
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      return await getPool().evento.delete({
        where: { id: parseInt(id) },
      });
    } catch (err) {
      throw err;
    }
  }
}

export default new EventosRepository();
