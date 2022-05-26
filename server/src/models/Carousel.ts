import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Carousel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image: string

    @Column()
    description: string

    @Column()
    date: string

}
