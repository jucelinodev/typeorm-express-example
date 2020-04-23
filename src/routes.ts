import { Router } from 'express'
import UserController from './app/controllers/user.controller'

const routes: Router = Router()

routes.get('/', (req, res) => {
  res.json({ mensagem: 'express ok!' })
})

// User routes
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

export default routes
