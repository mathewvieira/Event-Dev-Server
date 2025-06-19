import pool from '../shared/utils/pool.utils.js'
import { UsuarioResponseDTO } from '../dtos/usuarios.dto.js'

class UsuariosRepository {
  async findAll(skip = 0, take = 50, apenasAtivos = true) {
    try {
      const usuarios = await pool.usuario.findMany({
        skip: skip,
        take: take,
        where: { ativo: apenasAtivos }
      })

      return usuarios.map((usuario) => new UsuarioResponseDTO(usuario))
    } catch (error) {
      throw new Error(`Erro ao buscar Usuários: ${error.message}`)
    }
  }

  async findById(id, apenasAtivos = true) {
    try {
      const usuario = await pool.usuario.findUnique({
        where: { id, ativo: apenasAtivos }
      })

      if (!usuario) return null

      return new UsuarioResponseDTO(usuario)
    } catch (error) {
      throw new Error(`Erro ao buscar Usuário por ID: ${error.message}`)
    }
  }

  async create(usuarioCreateDTO) {
    try {
      const usuario = await pool.usuario.create({
        data: usuarioCreateDTO.getData()
      })

      return new UsuarioResponseDTO(usuario)
    } catch (error) {
      throw new Error(`Erro ao criar Usuário: ${error.message}`)
    }
  }

  async update(id, usuarioUpdateDTO, apenasAtivos = true) {
    try {
      const usuario = await pool.usuario.update({
        where: { id, ativo: apenasAtivos },
        data: usuarioUpdateDTO.toUpdateData()
      })

      return new UsuarioResponseDTO(usuario)
    } catch (error) {
      throw new Error(`Erro ao atualizar Usuário: ${error.message}`)
    }
  }

  async delete(id) {
    try {
      const usuario = await pool.usuario.update({
        where: { id },
        data: { ativo: false }
      })

      return new UsuarioResponseDTO(usuario)
    } catch (error) {
      throw new Error(`Erro ao excluir Usuário: ${error.message}`)
    }
  }
}

export default new UsuariosRepository()
