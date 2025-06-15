import UsuariosService from '../services/usuarios.service.js'
import { formatJson, formatNumber, formatResponse } from '../shared/utils/format.utils.js'

class UsuariosController {
  async index(req, res, next) {
    try {
      const page = formatNumber(req.query.page, 1)
      const perPage = formatNumber(req.query.perPage, 25)
      const skip = (page - 1) * perPage
      const usuarios = await UsuariosService.findAll(skip, perPage)
      const data = formatResponse(usuarios)
      const meta = { page: page, perPage: perPage, count: usuarios.length }
      res.status(200).json(formatJson(res.statusCode, data, meta))
    } catch (error) {
      next(error)
    }
  }

  async store(req, res, next) {
    try {
      const usuario = await UsuariosService.create(req.body)
      const data = formatResponse(usuario)
      res.status(data ? 201 : 400).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async show(req, res, next) {
    try {
      const id = formatNumber(req.params.id)
      const usuario = await UsuariosService.findById(id)
      const data = formatResponse(usuario)
      res.status(data ? 200 : 404).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const id = formatNumber(req.params.id)
      const usuario = await UsuariosService.update(id, req.body)
      const data = formatResponse(usuario)
      res.status(data ? 200 : 400).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const id = formatNumber(req.params.id)
      const usuario = await UsuariosService.delete(id)
      res.status(usuario ? 204 : 404).json(formatJson(res.statusCode))
    } catch (error) {
      next(error)
    }
  }
}

export default new UsuariosController()
