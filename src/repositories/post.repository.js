import pool from '../shared/utils/pool.utils.js'
import { PostResponseDTO } from '../dtos/posts.dto.js'

class PostsRepository {
  async findAll(skip = 0, take = 50, apenasAtivos = true) {
    try {
      const posts = await pool.post.findMany({
        skip: skip,
        take: take,
        where: { ativo: apenasAtivos }
      })

      return posts.map((post) => new PostResponseDTO(post))
    } catch (error) {
      throw new Error(`Erro ao buscar Posts: ${error.message}`)
    }
  }

  async findById(id, apenasAtivos = true) {
    try {
      const post = await pool.post.findUnique({
        where: { id, ativo: apenasAtivos }
      })

      if (!post) return null

      return new PostResponseDTO(post)
    } catch (error) {
      throw new Error(`Erro ao buscar Post por ID: ${error.message}`)
    }
  }

  async create(postCreateDTO) {
    try {
      const post = await pool.post.create({
        data: postCreateDTO.getData()
      })

      return new PostResponseDTO(post)
    } catch (error) {
      throw new Error(`Erro ao criar Post: ${error.message}`)
    }
  }

  async update(id, postUpdateDTO, apenasAtivos = true) {
    try {
      const post = await pool.post.update({
        where: { id, ativo: apenasAtivos },
        data: postUpdateDTO.toUpdateData()
      })

      return new PostResponseDTO(post)
    } catch (error) {
      throw new Error(`Erro ao atualizar Post: ${error.message}`)
    }
  }


  async delete(id) {
    try {
      const post = await pool.post.update({
        where: { id },
        data: { ativo: false }
      })

      return new PostResponseDTO(post)
    } catch (error) {
      throw new Error(`Erro ao excluir Post: ${error.message}`)
    }
  }
}

export default new PostsRepository()