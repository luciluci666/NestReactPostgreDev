import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Country } from './country.entity';
import { State } from './state.entity';

@Index('city_pkey', ['id'], { unique: true })
@Entity('city', { schema: 'public' })
export class City {
  @Column('integer', { primary: true, name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('character varying', {
    name: 'state_code',
    nullable: true,
    length: 255,
  })
  stateCode: string | null;

  @Column('character', { name: 'country_code', nullable: true, length: 2 })
  countryCode: string | null;

  @Column('numeric', { name: 'latitude', precision: 10, scale: 8 })
  latitude: string;

  @Column('numeric', { name: 'longitude', precision: 11, scale: 8 })
  longitude: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => "'2014-01-01 06:31:01'",
  })
  createdAt: Date;

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

  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country: Country;

  @ManyToOne(() => State, (state) => state.cities)
  @JoinColumn([{ name: 'state_id', referencedColumnName: 'id' }])
  state: State;
}
