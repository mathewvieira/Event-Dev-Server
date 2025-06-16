import express from 'express'
import status from 'http-status'

import { ROUTES } from '../shared/consts/routes.consts.js'

import comunidadesRouter from './comunidades.routes.js'
import eventosRouter from './eventos.routes.js'
import postsRouter from './posts.routes.js'
import usuariosRouter from './usuarios.routes.js'

const apiRouter = express.Router()

apiRouter.get('/', (_req, res) => {
  res.status(200).json({ status: res.statusCode, message: status[res.statusCode] })
})

apiRouter.use(ROUTES.comunidades, comunidadesRouter)

apiRouter.use(ROUTES.eventos, eventosRouter)

apiRouter.use(ROUTES.posts, postsRouter)

apiRouter.use(ROUTES.usuarios, usuariosRouter)

export default apiRouter
