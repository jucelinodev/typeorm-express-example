import { EntityRepository } from 'typeorm'
import { User } from '../entities/user.entity'
import { BaseRepository } from './base.repository'

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {}
