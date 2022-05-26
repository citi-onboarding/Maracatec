import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Banner {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @Column()
    description: string

}