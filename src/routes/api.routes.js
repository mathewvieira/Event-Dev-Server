import express from 'express'
import status from 'http-status'

import { ROUTES } from '../shared/consts/routes.consts.js'

import comunidadesRouter from './comunidades.routes.js'
import eventosRouter from './eventos.routes.js'
import postsRouter from './posts.routes.js'
import usuariosRouter from './usuarios.routes.js'
import authRouter from './auth.routes.js'

import notFoundMiddleware from '../middlewares/notFound.middleware.js'
import errorMiddleware from '../middlewares/error.middleware.js'

// import authMiddleware from '../middlewares/auth.middleware.js';
// import { authorizeRoles } from '../middlewares/authorization.middleware.js'
// import UsuariosController from '../controllers/Usuarios.Controller.js'

const apiRouter = express.Router()

apiRouter.get('/', (_req, res) => {
  res.status(200).json({ status: res.statusCode, message: status[res.statusCode] })
})

apiRouter.use(ROUTES.comunidades, comunidadesRouter)
apiRouter.use(ROUTES.eventos, eventosRouter)
apiRouter.use(ROUTES.posts, postsRouter)
apiRouter.use(ROUTES.usuarios, usuariosRouter)
apiRouter.use(ROUTES.auth, authRouter)

apiRouter.use(notFoundMiddleware)
apiRouter.use(errorMiddleware)

// apiRouter.get(ROUTES.usuarios, authMiddleware, UsuariosController.index);
// apiRouter.get(`${ROUTES.usuarios}/:id`, authMiddleware, UsuariosController.show);

// apiRouter.post(ROUTES.usuarios, authMiddleware, authorizeRoles('admin'), UsuariosController.store);
// apiRouter.patch(`${ROUTES.usuarios}/:id`, authMiddleware, authorizeRoles('admin', 'moderador'), UsuariosController.update);
// apiRouter.delete(`${ROUTES.usuarios}/:id`, authMiddleware, authorizeRoles('admin'), UsuariosController.destroy);

// apiRouter.get(ROUTES.comunidades, comunidadesRouter);
// apiRouter.get(`${ROUTES.comunidades}/:id`, comunidadesRouter);
// apiRouter.post(ROUTES.comunidades, authMiddleware, authorizeRoles('admin', 'moderador'), comunidadesRouter);
// apiRouter.patch(`${ROUTES.comunidades}/:id`, authMiddleware, authorizeRoles('admin', 'moderador'), comunidadesRouter);
// apiRouter.delete(`${ROUTES.comunidades}/:id`, authMiddleware, authorizeRoles('admin'), comunidadesRouter);

// apiRouter.get(ROUTES.eventos, eventosRouter);
// apiRouter.get(`${ROUTES.eventos}/:id`, eventosRouter);
// apiRouter.post(ROUTES.eventos, authMiddleware, authorizeRoles('admin', 'editor'), eventosRouter);
// apiRouter.patch(`${ROUTES.eventos}/:id`, authMiddleware, authorizeRoles('admin', 'editor'), eventosRouter);
// apiRouter.delete(`${ROUTES.eventos}/:id`, authMiddleware, authorizeRoles('admin'), eventosRouter);

// apiRouter.get(ROUTES.posts, postsRouter);
// apiRouter.get(`${ROUTES.posts}/:id`, postsRouter);
// apiRouter.post(ROUTES.posts, authMiddleware, authorizeRoles('admin', 'membro', 'editor'), postsRouter);
// apiRouter.patch(`${ROUTES.posts}/:id`, authMiddleware, authorizeRoles('admin', 'moderador', 'editor'), postsRouter);
// apiRouter.delete(`${ROUTES.posts}/:id`, authMiddleware, authorizeRoles('admin', 'moderador'), postsRouter);

export default apiRouter
