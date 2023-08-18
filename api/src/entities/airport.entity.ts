import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Airport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 56, nullable: true })
  name: string;

  @Column({ length: 3, nullable: true })
  code: string;

  @Column({ length: 2, nullable: true })
  state_code: string;

  @Column({ length: 2, nullable: true })
  country_code: string;

  @Column({ length: 32, nullable: true })
  country_name: string;
}
