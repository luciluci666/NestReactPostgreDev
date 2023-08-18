import { Column, Entity, Index, OneToMany } from 'typeorm';
import { City } from './city.entity';
import { State } from './state.entity';

@Index('country_pkey', ['id'], { unique: true })
@Entity('country', { schema: 'public' })
export class Country {
  @Column('integer', { primary: true, name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', nullable: true, length: 100 })
  name: string | null;

  @Column('character', {
    name: 'iso3',
    nullable: true,
    length: 3,
    default: () => 'NULL::bpchar',
  })
  iso3: string | null;

  @Column('character', {
    name: 'numeric_code',
    nullable: true,
    length: 3,
    default: () => 'NULL::bpchar',
  })
  numericCode: string | null;

  @Column('character', {
    name: 'iso2',
    nullable: true,
    length: 2,
    default: () => 'NULL::bpchar',
  })
  iso2: string | null;

  @Column('character varying', {
    name: 'phonecode',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  phonecode: string | null;

  @Column('character varying', {
    name: 'capital',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  capital: string | null;

  @Column('character varying', {
    name: 'currency',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  currency: string | null;

  @Column('character varying', {
    name: 'currency_name',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  currencyName: string | null;

  @Column('character varying', {
    name: 'currency_symbol',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  currencySymbol: string | null;

  @Column('character varying', {
    name: 'tld',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  tld: string | null;

  @Column('character varying', {
    name: 'native',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  native: string | null;

  @Column('character varying', {
    name: 'region',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  region: string | null;

  @Column('character varying', {
    name: 'subregion',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  subregion: string | null;

  @Column('text', { name: 'timezones', nullable: true })
  timezones: string | null;

  @Column('text', { name: 'translations', nullable: true })
  translations: string | null;

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

  @Column('character varying', {
    name: 'emoji',
    nullable: true,
    length: 191,
    default: () => 'NULL::character varying',
  })
  emoji: string | null;

  @Column('character varying', {
    name: 'emojiu',
    nullable: true,
    length: 191,
    default: () => 'NULL::character varying',
  })
  emojiu: string | null;

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

  @OneToMany(() => City, (city) => city.country)
  cities: City[];

  @OneToMany(() => State, (state) => state.country)
  states: State[];
}
