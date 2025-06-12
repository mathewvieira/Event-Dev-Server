import express from 'express'

import comunidadesController from '../controllers/comunidades.Controller.js'

const usuariosRouter = express.Router()

usuariosRouter.get('/', comunidadesController.index)

export default usuariosRouter
