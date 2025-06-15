import express from 'express'
import UsuariosController from '../controllers/usuarios.controller.js'

const usuariosRouter = express.Router()

usuariosRouter.get('/', UsuariosController.index)
usuariosRouter.get('/:id', UsuariosController.show)
usuariosRouter.post('/', UsuariosController.store)
usuariosRouter.patch('/:id', UsuariosController.update)
usuariosRouter.delete('/:id', UsuariosController.destroy)

export default usuariosRouter
