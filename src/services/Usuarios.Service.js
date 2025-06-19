import UsuariosRepository from '../repositories/Usuarios.Repository.js'
import { UsuarioCreateDTO, UsuarioUpdateDTO } from '../dtos/usuarios.dto.js'

class UsuariosService {
  constructor(usuariosRepository) {
    this.usuariosRepository = usuariosRepository
  }

  async findAll(skip = 0, take = 50) {
    return await this.usuariosRepository.findAll(skip, take)
  }

  async findById(id) {
    return await this.usuariosRepository.findById(id)
  }

  async create(data) {
    const usuarioCreateDTO = new UsuarioCreateDTO(data)
    const validationResult = usuarioCreateDTO.validateData()
    if (!validationResult.isValid) {
      throw new Error(`Dados inválidos para criação do Usuário: ${validationResult.errors.join(', ')}`)
    }
    return await this.usuariosRepository.create(usuarioCreateDTO)
  }

  async update(id, data) {
    const usuarioUpdateDTO = new UsuarioUpdateDTO(data)

    const existingUsuario = await this.usuariosRepository.findById(id)
    if (!existingUsuario) {
      throw new Error(`Usuário com ID ${id} não encontrado.`)
    }

    return await this.usuariosRepository.update(id, usuarioUpdateDTO)
  }

  async delete(id) {
    const existingUsuario = await this.usuariosRepository.findById(id)
    if (!existingUsuario) {
      throw new Error(`Usuário com ID ${id} não encontrado.`)
    }

    return await this.usuariosRepository.delete(id)
  }
}

export default new UsuariosService(UsuariosRepository)