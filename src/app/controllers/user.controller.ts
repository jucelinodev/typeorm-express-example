import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/user.repository'

class UserController {
  async index(req: Request, res: Response): Promise<Response> {
    const users = await getCustomRepository(UserRepository).getAll()
    return res.json(users)
  }

  async show(req: Request, res: Response): Promise<Response> {
    const user = await getCustomRepository(UserRepository).getOneById(req.params.id)

    if (!user) return res.status(404).json({ mensagem: 'Usuario não encontrado' })

    return res.json(user)
  }

  async store(req: Request, res: Response): Promise<Response> {
    const user = await getCustomRepository(UserRepository).create(req.body)
    console.log(user)
    return res.json(user)
  }

  async update(req: Request, res: Response): Promise<Response> {
    await getCustomRepository(UserRepository).update(req.params.id, req.body)
    return res.json({ mensagem: 'Usuario atualizado com sucesso' })
  }

  async delete(req: Request, res: Response): Promise<Response> {
    await getCustomRepository(UserRepository).delete(req.params.id)
    return res.status(204).json()
  }
}

export default new UserController()
