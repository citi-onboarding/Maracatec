import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity() 
export class Timer { 
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    CurrentDays:number

    @Column()
    CurrentHours:number

    @Column()
    CurrentMinutes:number

    @Column()
    EventDays:number

    @Column()
    EventHours:number

    @Column()
    EventMinutes:number
}