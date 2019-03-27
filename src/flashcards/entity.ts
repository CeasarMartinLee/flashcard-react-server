import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'



@Entity()
export default class Flashcard extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text', { nullable: false })
  answer: string;

  @IsString()
  @Column('text', { nullable: false })
  picture: string;

}