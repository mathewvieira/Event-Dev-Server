import express from 'express'

import comunidadesController from '../controllers/comunidades.Controller.js'

const eventosRouter = express.Router()

eventosRouter.get('/', comunidadesController.index)

export default eventosRouter
