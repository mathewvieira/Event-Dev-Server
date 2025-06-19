
import PostsRepository from '../repositories/Posts.Repository.js'
import { PostCreateDTO, PostUpdateDTO } from '../dtos/posts.dto.js'
class PostsService {
  constructor(postsRepository) {
    this.postsRepository = postsRepository
  }

  async findAll(skip = 0, take = 50) {
    return await this.postsRepository.findAll(skip, take)
  }

  async findById(id) {
    return await this.postsRepository.findById(id)
  }

  async create(data) {
    const postCreateDTO = new PostCreateDTO(data)

    const validationResult = postCreateDTO.validateData()
    if (!validationResult.isValid) {
      throw new Error(`Dados inválidos para criação do Post: ${validationResult.errors.join(', ')}`)
    }

    return await this.postsRepository.create(postCreateDTO)
  }

  async update(id, data) {
    const postUpdateDTO = new PostUpdateDTO(data)
    const existingPost = await this.postsRepository.findById(id)
    if (!existingPost) {
      throw new Error(`Post com ID ${id} não encontrado.`)
    }


    return await this.postsRepository.update(id, postUpdateDTO)
  }

  async delete(id) {

    const existingPost = await this.postsRepository.findById(id)
    if (!existingPost) {
      throw new Error(`Post com ID ${id} não encontrado.`)
    }

    return await this.postsRepository.delete(id)
  }
}

export default new PostsService(PostsRepository)