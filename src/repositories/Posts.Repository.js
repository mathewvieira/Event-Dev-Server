import getPool from '../shared/utils/pool.Utils.js';

class PostsRepository {
  async create(post) {
    try {
      return await getPool().post.create({
        data: post,
      });
    } catch (err) {
      throw err;
    }
  }

  async findMany() {
    try {
      return await getPool().post.findMany();
    } catch (err) {
      throw err;
    }
  }

  async findById(id) {
    try {
      return await getPool().post.findUnique({
        where: { id: parseInt(id) },
      });
    } catch (err) {
      throw err;
    }
  }

  async update(id, data) {
    try {
      return await getPool().post.update({
        where: { id: parseInt(id) },
        data: data,
      });
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      return await getPool().post.delete({
        where: { id: parseInt(id) },
      });
    } catch (err) {
      throw err;
    }
  }
}

export default new PostsRepository();