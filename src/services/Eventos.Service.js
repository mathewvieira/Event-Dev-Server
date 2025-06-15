import EventosRepository from '../repositories/Eventos.Repository.js';

class EventosService {
  async createEvent(data) {
    const newData = { ...data, criado_em: new Date(), atualizado_em: new Date() };
    return await EventosRepository.create(newData);
  }

  async getEvents() {
    return await EventosRepository.findMany();
  }

  async getEventById(id) {
    return await EventosRepository.findById(id);
  }

  async updateEvent(id, data) {
    const updatedData = { ...data, atualizado_em: new Date() };
    return await EventosRepository.update(id, updatedData);
  }

  async deleteEvent(id) {
    return await EventosRepository.delete(id);
  }
}

export default new EventosService();