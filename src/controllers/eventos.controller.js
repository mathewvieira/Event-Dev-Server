import status from 'http-status';
import EventosService from '../services/Eventos.Service.js';

// Paginação

class EventosController {
  async index(_req, res) {
    try {
      const eventos = await EventosService.getEvents();
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: eventos,
      };
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async create(req, res) {
    try {
      const newEvent = await EventosService.createEvent(req.body);
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: newEvent,
      };
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // Tratar um parametro
  async show(req, res) {
    try {
      const event = await EventosService.getEventById(req.params.id);
      if (!event) {
        return res.status(404).json({ status: 404, message: status[404], data: 'Evento não encontrado.' });
      }
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: event,
      };
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedEvent = await EventosService.updateEvent(req.params.id, req.body);
      if (!updatedEvent) {
        return res.status(404).json({ status: 404, message: status[404], data: 'Evento não encontrado para atualização.' });
      }
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: updatedEvent,
      };
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const deletedEvent = await EventosService.deleteEvent(req.params.id);
      if (!deletedEvent) {
        return res.status(404).json({ status: 404, message: status[404], data: 'Evento não encontrado para exclusão.' });
      }
      res.status(204).send();
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new EventosController();
