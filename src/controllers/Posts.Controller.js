import status from 'http-status'
import PostsService from '../services/Posts.Service.js'
import { formatJson, formatNumber, formatResponse } from '../shared/utils/format.utils.js'

class PostsController {
  async index(req, res, next) {
    try {
      const page = formatNumber(req.query.page, 1)
      const perPage = formatNumber(req.query.perPage, 25)
      const skip = (page - 1) * perPage
      const posts = await PostsService.findAll(skip, perPage)
      const data = formatResponse(posts)
      const meta = { page: page, perPage: perPage, count: posts.length }
      res.status(200).json(formatJson(res.statusCode, data, meta))
    } catch (error) {
      next(error)
    }
  }

  async store(req, res, next) {
    try {
      const post = await PostsService.create(req.body)
      const data = formatResponse(post)
      res.status(data ? 201 : 400).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async show(req, res, next) {
    try {
      const id = formatNumber(req.params.id)
      const post = await PostsService.findById(id)
      const data = formatResponse(post)
      res.status(data ? 200 : 404).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const id = formatNumber(req.params.id)
      const post = await PostsService.update(id, req.body)
      const data = formatResponse(post)
      res.status(data ? 200 : 400).json(formatJson(res.statusCode, data))
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const id = formatNumber(req.params.id)
      const post = await PostsService.delete(id)
      res.status(post ? 204 : 404).json(formatJson(res.statusCode))
    } catch (error) {
      next(error)
    }
  }
}

export default new PostsController()
