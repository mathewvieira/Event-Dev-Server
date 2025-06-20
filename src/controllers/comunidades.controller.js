import ComunidadesService from '../services/comunidades.service.js'
import { formatJson, formatNumber, formatResponse } from '../shared/utils/format.utils.js'

class ComunidadesController {
  async index(req, res) {
    try {
      const page = formatNumber(req.query.page, 1)
      const perPage = formatNumber(req.query.perPage, 25)
      const skip = (page - 1) * perPage
      const comunidades = await ComunidadesService.findAll(skip, perPage)
      const data = formatResponse(comunidades)
      const meta = { page: page, perPage: perPage, count: comunidades.length }
      res.status(200).json(formatJson(res.statusCode, data, meta))
    } catch (error) {
      next(error)
    }
  }

  async store(req, res) {
    try {
      const comunidade = await ComunidadesService.create(req.body)
      const data = formatResponse(comunidade)
      res.status(data ? 201 : 400).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async show(req, res) {
    try {
      const id = formatNumber(req.params.id)
      const comunidade = await ComunidadesService.findById(id)
      const data = formatResponse(comunidade)
      res.status(data ? 200 : 404).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const id = formatNumber(req.body.id)
      const comunidade = await ComunidadesService.update(id, req.body)
      const data = formatResponse(comunidade)
      res.status(data ? 200 : 400).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res) {
    try {
      const id = formatNumber(req.params.id)
      const comunidade = await ComunidadesService.delete(id)
      res.status(comunidade ? 204 : 404).json(formatJson(res.statusCode))
    } catch (error) {
      next(error)
    }
  }
}

export default new ComunidadesController()
