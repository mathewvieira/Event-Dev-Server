import pool from '../shared/utils/pool.utils.js'

import { ComunidadeResponseDTO } from '../dtos/comunidades.dto.js'

class ComunidadesRepository {
  async findAll(skip = 0, take = 50, apenasAtivos = true) {
    try {
      const comunidades = await pool.comunidade.findMany({
        skip: skip,
        take: take,
        where: { ativo: apenasAtivos }
      })

      return comunidades.map((comunidade) => new ComunidadeResponseDTO(comunidade))
    } catch (error) {
      throw new Error(`Erro ao buscar Comunidades: ${error}`)
    }
  }

  async findById(id, apenasAtivos = true) {
    try {
      const comunidade = await pool.comunidade.findUnique({
        where: { id, ativo: apenasAtivos }
      })

      if (!comunidade) return null

      return new ComunidadeResponseDTO(comunidade)
    } catch (error) {
      throw new Error(`Erro ao buscar Comunidade por ID: ${error.message}`)
    }
  }

  async create(comunidadeCreateDTO) {
    try {
      const comunidade = await pool.comunidade.create({
        data: comunidadeCreateDTO.getData()
      })

      return new ComunidadeResponseDTO(comunidade)
    } catch (error) {
      throw new Error(`Erro ao criar Comunidade: ${error.message}`)
    }
  }

  async update(id, comunidadeUpdateDTO, apenasAtivos = true) {
    try {
      console.log(comunidadeUpdateDTO.toUpdateData())
      const comunidade = await pool.comunidade.update({
        where: { id, ativo: apenasAtivos },
        data: comunidadeUpdateDTO.toUpdateData()
      })

      return new ComunidadeResponseDTO(comunidade)
    } catch (error) {
      throw new Error(`Erro ao atualizar Comunidade: ${error.message}`)
    }
  }

  async delete(id) {
    try {
      const comunidade = await pool.comunidade.update({
        where: { id },
        data: { ativo: false }
      })

      return new ComunidadeResponseDTO(comunidade)
    } catch (error) {
      throw new Error(`Erro ao excluir Comunidade: ${error.message}`)
    }
  }
}

export default new ComunidadesRepository()
