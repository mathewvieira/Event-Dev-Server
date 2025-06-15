import express from 'express'

import ComunidadesController from '../controllers/Comunidades.Controller.js'

const comunidadesRouter = express.Router()

comunidadesRouter.get('/', ComunidadesController.index)
comunidadesRouter.get('/:id', ComunidadesController.show)
comunidadesRouter.post('/', ComunidadesController.store)
comunidadesRouter.patch('/', ComunidadesController.update)
comunidadesRouter.delete('/:id', ComunidadesController.destroy)

export default comunidadesRouter
