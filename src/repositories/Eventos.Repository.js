import pool from '../shared/utils/pool.Utils.js'

import { EventoResponseDTO } from '../dtos/eventos.dto.js'

class EventosRepository {
  async findAll(skip = 0, take = 50, apenasAtivos = true) {
    try {
      const eventos = await pool.evento.findMany({
        skip: skip,
        take: take,
        where: { ativo: apenasAtivos }
      })
      console.log(eventos)

      return eventos.map((evento) => new EventoResponseDTO(evento))
    } catch (error) {
      console.log(error)
      throw new Error(`Erro ao buscar Eventos: ${error}`)
    }
  }

  async findById(id, apenasAtivos = true) {
    try {
      const evento = await pool.evento.findUnique({
        where: { id, ativo: apenasAtivos }
      })

      if (!evento) return null

      return new EventoResponseDTO(evento)
    } catch (error) {
      throw new Error(`Erro ao buscar Evento por ID: ${error.message}`)
    }
  }

  async create(eventoCreateDTO) {
    try {
      const evento = await pool.evento.create({
        data: eventoCreateDTO.getData()
      })

      return new EventoResponseDTO(evento)
    } catch (error) {
      throw new Error(`Erro ao criar Evento: ${error.message}`)
    }
  }

  async update(id, eventoUpdateDTO, apenasAtivos = true) {
    try {
      const evento = await pool.evento.update({
        where: { id, ativo: apenasAtivos },
        data: eventoUpdateDTO.toUpdateData()
      })

      return new EventoResponseDTO(evento)
    } catch (error) {
      throw new Error(`Erro ao atualizar Evento: ${error.message}`)
    }
  }

  async delete(id) {
    try {
      const evento = await pool.evento.update({
        where: { id },
        data: { ativo: false }
      })

      return new EventoResponseDTO(evento)
    } catch (error) {
      throw new Error(`Erro ao excluir Evento: ${error.message}`)
    }
  }
}

export default new EventosRepository()
