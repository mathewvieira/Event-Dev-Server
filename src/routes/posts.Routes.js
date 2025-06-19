import express from 'express'
import PostsController from '../controllers/Posts.Controller.js'

const postsRouter = express.Router()

postsRouter.get('/', PostsController.index)
postsRouter.get('/:id', PostsController.show)
postsRouter.post('/', PostsController.store)
postsRouter.patch('/:id', PostsController.update)
postsRouter.delete('/:id', PostsController.destroy)

export default postsRouter