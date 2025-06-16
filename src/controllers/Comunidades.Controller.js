import status from 'http-status'

import ComunidadesService from '../services/comunidades.service.js'

class ComunidadesController {
  async index(req, res) {
    try {
      const page = Number.parseInt(req.query.page) || 1
      const perPage = Number.parseInt(req.query.perPage) || 25
      const skip = (page - 1) * perPage
      const comunidades = await ComunidadesService.findAll(skip, perPage)
      const data = comunidades.length > 1 ? { data: comunidades } : undefined

      res.status(200).json({
        status: res.statusCode,
        message: status[res.statusCode],
        ...data,
        meta: {
          page: page,
          perPage: perPage,
          count: comunidades.length
        }
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async store(req, res) {
    try {
      const comunidade = await ComunidadesService.create(req.body)
      const data = comunidade ? { data: comunidade } : undefined

      res.status(data ? 201 : 400).json({
        status: res.statusCode,
        message: status[res.statusCode],
        ...data
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async show(req, res) {
    try {
      const id = Number.parseInt(req.params.id) || 0
      const comunidade = await ComunidadesService.findById(id)
      const data = comunidade ? { data: comunidade } : undefined

      res.status(data ? 200 : 404).json({
        status: res.statusCode,
        message: status[res.statusCode],
        ...data
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req, res) {
    try {
      const id = Number.parseInt(req.body.id) || 0
      const comunidade = await ComunidadesService.update(id, req.body)
      const data = comunidade ? { data: comunidade } : undefined

      res.status(data ? 200 : 400).json({
        status: res.statusCode,
        message: status[res.statusCode],
        ...data
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async destroy(req, res) {
    try {
      const id = Number.parseInt(req.params.id) || 0
      const comunidade = await ComunidadesService.delete(id)
      const data = comunidade ? { data: comunidade } : undefined

      res.status(data ? 204 : 404)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new ComunidadesController()
