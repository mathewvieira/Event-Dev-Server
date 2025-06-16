import express from 'express'

import { API_MAX_VERSION, API_MIN_VERSION } from './shared/consts/api.consts.js'

import apiRouter from './routes/api.routes.js'
import getApiPath from './shared/utils/api.utils.js'
import stampMiddleware from './middlewares/stamp.middleware.js'

BigInt.prototype.toJSON = function () {
  return this.toString()
}

const PORT = process.env.NODE_PORT

const app = express()

app.use(express.json())

app.use(stampMiddleware)

app.use(getApiPath(API_MIN_VERSION, API_MAX_VERSION), apiRouter)

app.listen(PORT, async () => {
  console.log(`(🏃) Running... (http://localhost:${PORT})`)
  console.log('(💯) Conexão estabelecida!')
})
