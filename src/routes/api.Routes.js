import express from 'express'
import status from 'http-status'

import { ROUTES } from '../shared/consts/routes.Consts.js'

import comunidadesRouter from './comunidades.Routes.js'
import eventosRouter from './eventos.Routes.js'
import postsRouter from './posts.Routes.js'
import usuariosRouter from './usuarios.Routes.js'

const apiRouter = express.Router()

apiRouter.get('/', (_req, res) => {
  res.status(200).json({ status: res.statusCode, message: status[res.statusCode] })
})

apiRouter.use(ROUTES.comunidades, comunidadesRouter)

apiRouter.use(ROUTES.eventos, eventosRouter)

apiRouter.use(ROUTES.posts, postsRouter)

apiRouter.use(ROUTES.usuarios, usuariosRouter)

export default apiRouter
