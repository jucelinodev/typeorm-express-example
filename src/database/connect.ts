import { createConnection } from 'typeorm'
import { connectionOptions } from '../config/typeorm.config'

async function startTypeORM() {
  try {
    await createConnection(connectionOptions)
    console.log('TypeORM conectado com sucesso')
  } catch (error) {
    console.error(error)
  }
}

startTypeORM()
