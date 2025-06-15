import EventosService from '../services/Eventos.Service.js'
import { formatJson, formatNumber, formatResponse } from '../shared/utils/format.utils.js'

class EventosController {
  async index(req, res, next) {
    try {
      const page = formatNumber(req.query.page, 1)
      const perPage = formatNumber(req.query.perPage, 25)
      const skip = (page - 1) * perPage
      console.log('Error')
      const eventos = await EventosService.findAll(skip, perPage)
      const data = formatResponse(eventos)
      const meta = { page: page, perPage: perPage, count: eventos.length }
      res.status(200).json(formatJson(res.statusCode, data, meta))
    } catch (error) {
      next(error)
    }
  }

  async store(req, res, next) {
    try {
      const evento = await EventosService.create(req.body)
      const data = formatResponse(evento)
      res.status(data ? 201 : 400).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async show(req, res, next) {
    try {
      const id = formatNumber(req.params.id)
      const evento = await EventosService.findById(id)
      const data = formatResponse(evento)
      res.status(data ? 200 : 404).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const id = formatNumber(req.body.id || req.params.id)
      const evento = await EventosService.update(id, req.body)
      const data = formatResponse(evento)
      res.status(data ? 200 : 400).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const id = formatNumber(req.params.id)
      const evento = await EventosService.delete(id)
      res.status(evento ? 204 : 404).json(formatJson(res.statusCode))
    } catch (error) {
      next(error)
    }
  }
}

export default new EventosController()
