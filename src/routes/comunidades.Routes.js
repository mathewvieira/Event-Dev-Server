import express from 'express'

import ComunidadesController from '../controllers/Comunidades.Controller.js'

const comunidadesRouter = express.Router()

comunidadesRouter.get('/', ComunidadesController.index)

export default comunidadesRouter
