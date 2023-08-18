import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Airline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  iata: string;

  @Column()
  icao: string;

  @Column()
  callsign: string;

  @Column()
  country: string;
}
