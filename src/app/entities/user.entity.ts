import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  @CreateDateColumn({ name: 'create_at' })
  createAt: Date

  @Column()
  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: Date
}
