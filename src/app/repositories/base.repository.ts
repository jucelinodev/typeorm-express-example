import { AbstractRepository, UpdateResult, DeleteResult } from 'typeorm'

export class BaseRepository<T> extends AbstractRepository<T> {
  async getAll(): Promise<T[]> {
    return await this.repository.find()
  }

  async getOneById(id: string): Promise<T | undefined> {
    return await this.repository.findOne(id)
  }

  async create(data: object): Promise<T> {
    const result = this.repository.create(data)
    return await this.repository.save(result)
  }

  async update(id: string, data: object): Promise<UpdateResult> {
    return await this.repository.update(id, data)
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id)
  }
}
