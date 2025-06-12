import express from 'express'

import { API_MAX_VERSION, API_MIN_VERSION } from './shared/consts/apiConsts.js'

import apiRouter from './routes/api.Routes.js'
import getApiPath from './shared/utils/api.Utils.js'
import stampMiddleware from './middlewares/stamp.Middleware.js'
import './shared/utils/pool.Utils.js'

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
