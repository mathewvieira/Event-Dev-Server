import UsuariosRepository from '../repositories/usuarios.repository.js'

class UsuariosService {
  async createUser(data) {
    const existingUser = await UsuariosRepository.findByEmail(data.email)

    // validar email único
    if (existingUser) {
      const error = new Error('Email já cadastrado!')
      error.statusCode = 400
      throw error
    }

    // validar role de usuário
    if (!['admin', 'professor', 'aluno'].includes(data.role)) {
      const error = new Error('Perfil de acesso inválido!')
      error.statusCode = 400
      throw error
    }

    // validar mínimo de senha
    if (!data.senha || data.senha.length < 6) {
      const error = new Error('A senha deve conter no mínimo 6 caracteres')
      error.statusCode = 400
      throw error
    }

    // Hash da senha
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(data.senha, saltRounds)
    data.senha = hashedPassword

    const user = new User(data)
    return UsuariosRepository.create(user)
  }

  getUsers() {
    return UsuariosRepository.findAll()
  }

  getUserById(id) {
    return UsuariosRepository.findById(id)
  }

  updateUser(id, data) {
    const user = UsuariosRepository.findById(id)
    if (!user) {
      const error = new Error('Usuário não encontrado!')
      error.statusCode = 404
      throw error
    }
    Object.assign(user, data, { atualizadoEm: new Date() })
    return UsuariosRepository.update(id, user)
  }

  deleteUser(id) {
    return UsuariosRepository.delete(id)
  }
}

export default new UsuariosService()
