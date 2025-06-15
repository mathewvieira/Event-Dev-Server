import UsuariosRepository from '../repositories/usuarios.repository.js'
import { UsuarioResponseDTO } from '../dtos/usuarios.dto.js'
import { compareSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'suaChaveSecretaMuitoForteEEmProducaoVariavelDeAmbiente'
const JWT_EXPIRES_IN = '1d'

class AuthService {
  constructor(usuariosRepository) {
    this.usuariosRepository = usuariosRepository
  }

  async login(email, senha) {
    const usuario = await this.usuariosRepository.findByEmail(email, false)

    if (!usuario) {
      throw new Error('Credenciais inválidas.')
    }

    const senhaCorreta = compareSync(senha, usuario.senha)
    if (!senhaCorreta) {
      throw new Error('Credenciais inválidas.')
    }

    if (!usuario.ativo) {
      throw new Error('Conta desativada. Entre em contato com o suporte.')
    }

    const payload = {
      id: usuario.id,
      email: usuario.email,
      funcao: usuario.funcao,
      usuario_root: usuario.usuario_root
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

    return {
      token,
      usuario: new UsuarioResponseDTO(usuario)
    }
  }

  async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET)
      const usuario = await this.usuariosRepository.findById(decoded.id, true)
      if (!usuario) {
        throw new Error('Usuário não encontrado ou inativo.')
      }
      return decoded
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new Error('Token expirado.')
      }
      throw new Error('Token inválido ou malformado.')
    }
  }
}

export default new AuthService(UsuariosRepository)
