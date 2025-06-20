import ComunidadesRepository from '../repositories/comunidades.repository.js'

import { ComunidadeCreateDTO, ComunidadeUpdateDTO } from '../dtos/comunidades.dto.js'

class ComunidadesService {
  constructor(comunidadesRepository) {
    this.comunidadesRepository = comunidadesRepository
  }

  async findAll(skip = 0, take = 50) {
    return await this.comunidadesRepository.findAll(skip, take)
  }

  async findById(id) {
    return await this.comunidadesRepository.findById(id)
  }

  async create(data) {
    const comunidadeCreateDTO = new ComunidadeCreateDTO(data)

    if (!comunidadeCreateDTO.validateData()) throw new Error(`Dados inválidos: ${validation.errors.join(', ')}`)

    return await this.comunidadesRepository.create(comunidadeCreateDTO)
  }

  async update(id, data) {
    const comunidadeUpdateDTO = new ComunidadeUpdateDTO(data)

    if (!(await this.findById(id))) throw new Error(`Comunidade não encontrada`)

    return await this.comunidadesRepository.update(id, comunidadeUpdateDTO)
  }

  async delete(id) {
    if (!(await this.findById(id))) throw new Error(`Comunidade não encontrada`)

    return await this.comunidadesRepository.delete(id)
  }
}

export default new ComunidadesService(ComunidadesRepository)
