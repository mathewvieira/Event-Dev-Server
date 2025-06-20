import express from 'express'

import comunidadesController from '../controllers/comunidades.controller.js'

const eventosRouter = express.Router()

eventosRouter.get('/', comunidadesController.index)

export default eventosRouter
