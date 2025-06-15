import express from 'express';
import PostsController from '../controllers/Posts.Controller.js';

const postsRouter = express.Router();

postsRouter.get('/', PostsController.index);
postsRouter.post('/', PostsController.create);
postsRouter.get('/:id', PostsController.getById);
postsRouter.put('/:id', PostsController.update);
postsRouter.delete('/:id', PostsController.delete);

export default postsRouter;