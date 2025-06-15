import status from 'http-status';
import PostsService from '../services/Posts.Service.js';

class PostsController {
  async index(_req, res) {
    try {
      const posts = await PostsService.getPosts();
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: posts,
      };
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async create(req, res) {
    try {
      const newPost = await PostsService.createPost(req.body);
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: newPost,
      };
      res.status(201).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getById(req, res) {
    try {
      const post = await PostsService.getPostById(req.params.id);
      if (!post) {
        return res.status(404).json({ status: 404, message: status[404], data: 'Post não encontrado.' });
      }
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: post,
      };
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostsService.updatePost(req.params.id, req.body);
      if (!updatedPost) {
        return res.status(404).json({ status: 404, message: status[404], data: 'Post não encontrado para atualização.' });
      }
      const response = {
        status: res.statusCode,
        message: status[res.statusCode],
        data: updatedPost,
      };
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const deletedPost = await PostsService.deletePost(req.params.id);
      if (!deletedPost) {
        return res.status(404).json({ status: 404, message: status[404], data: 'Post não encontrado para exclusão.' });
      }
      res.status(204).send(); // No content
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PostsController();