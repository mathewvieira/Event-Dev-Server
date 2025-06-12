import status from 'http-status'
import ComunidadesService from '../services/Comunidades.Service.js'

class ComunidadesController {
  async index(_req, res) {
    try {
      const comunidades = await ComunidadesService.showAll()
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: comunidades
      }
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

export default new ComunidadesController()
