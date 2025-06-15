import express from 'express'

import EventosController from '../controllers/eventos.controller.js'

const eventosRouter = express.Router()

eventosRouter.get('/', EventosController.index)
eventosRouter.post('/', EventosController.create)
eventosRouter.get('/:id', EventosController.getById)
eventosRouter.put('/:id', EventosController.update)
eventosRouter.delete('/:id', EventosController.delete)

export default eventosRouter
