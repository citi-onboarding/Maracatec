import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity() 
export class Timer { 
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    EventDay:string
}