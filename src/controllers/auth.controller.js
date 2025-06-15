import AuthService from '../services/auth.service.js'
import { formatJson } from '../shared/utils/format.utils.js'

class AuthController {
  async login(req, res, next) {
    try {
      const { email, senha } = req.body

      if (!email || !senha) {
        return res.status(400).json(formatJson(400, null, { message: 'E-mail e senha são obrigatórios.' }))
      }

      const result = await AuthService.login(email, senha)
      res.status(200).json(formatJson(200, result, { message: 'Login realizado com sucesso.' }))
    } catch (error) {
      if (
        error.message === 'Credenciais inválidas.' ||
        error.message === 'Conta desativada. Entre em contato com o suporte.'
      ) {
        return res.status(401).json(formatJson(401, null, { message: error.message }))
      }
      next(error)
    }
  }
}

export default new AuthController()
