import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { City } from './city.entity';
import { Country } from './country.entity';

@Index('state_pkey', ['id'], { unique: true })
@Entity('state', { schema: 'public' })
export class State {
  @Column('integer', { primary: true, name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('character', { name: 'country_code', nullable: true, length: 2 })
  countryCode: string | null;

  @Column('character varying', {
    name: 'fips_code',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  fipsCode: string | null;

  @Column('character varying', {
    name: 'iso2',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  iso2: string | null;

  @Column('character varying', {
    name: 'type',
    nullable: true,
    length: 191,
    default: () => 'NULL::character varying',
  })
  type: string | null;

  @Column('numeric', {
    name: 'latitude',
    nullable: true,
    precision: 10,
    scale: 8,
    default: () => 'NULL::numeric',
  })
  latitude: string | null;

  @Column('numeric', {
    name: 'longitude',
    nullable: true,
    precision: 11,
    scale: 8,
    default: () => 'NULL::numeric',
  })
  longitude: string | null;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('integer', { name: 'flag', default: () => '1' })
  flag: number;

  @Column('character varying', {
    name: 'wikidataid',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  wikidataid: string | null;

  @OneToMany(() => City, (city) => city.state)
  cities: City[];

  @ManyToOne(() => Country, (country) => country.states)
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country: Country;
}
