import PostsRepository from '../repositories/Posts.Repository.js';

class PostsService {
  async createPost(data) {
    const newData = { ...data, criado_em: new Date(), atualizado_em: new Date() };
    return await PostsRepository.create(newData);
  }

  async getPosts() {
    return await PostsRepository.findMany();
  }

  async getPostById(id) {
    return await PostsRepository.findById(id);
  }

  async updatePost(id, data) {
    const updatedData = { ...data, atualizado_em: new Date() };
    return await PostsRepository.update(id, updatedData);
  }

  async deletePost(id) {
    return await PostsRepository.delete(id);
  }
}

export default new PostsService();