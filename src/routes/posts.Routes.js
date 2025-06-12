import express from 'express'

import comunidadesController from '../controllers/comunidades.Controller.js'

const postsRouter = express.Router()

postsRouter.get('/', comunidadesController.index)

export default postsRouter
