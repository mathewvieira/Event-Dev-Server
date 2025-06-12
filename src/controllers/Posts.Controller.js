import status from 'http-status'

class PostsController {
  async index(_req, res) {
    res.status(200).json({ status: res.statusCode, message: status[res.statusCode] })
  }
}

export default new PostsController()
