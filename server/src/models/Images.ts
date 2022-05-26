import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Images{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    images: string[]
}