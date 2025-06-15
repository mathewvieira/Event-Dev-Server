import AuthService from '../services/auth.service.js'
import { formatJson } from '../shared/utils/format.utils.js'

export default async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json(formatJson(401, null, { message: 'Token de autenticação ausente ou malformado.' }))
    }

    const token = authHeader.split(' ')[1]

    const decodedToken = await AuthService.verifyToken(token)
    req.usuario = decodedToken
    next()
  } catch (error) {
    if (error.message === 'Token expirado.') {
      return res.status(401).json(formatJson(401, null, { message: 'Sessão expirada. Faça login novamente.' }))
    }
    if (error.message === 'Token inválido ou malformado.') {
      return res.status(401).json(formatJson(401, null, { message: 'Token de autenticação inválido.' }))
    }
    next(error)
  }
}
