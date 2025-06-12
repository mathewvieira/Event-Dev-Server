import status from 'http-status'

class UsuariosController {
  async index(_req, res) {
    res.status(200).json({ status: res.statusCode, message: status[res.statusCode] })
  }
}

export default new UsuariosController()
