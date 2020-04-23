import 'reflect-metadata'
import express, { Application } from 'express'
import routes from './routes'

import './database/connect'

class Server {
  server: Application = express()

  constructor() {
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.use(routes)
  }
}

export default new Server().server
