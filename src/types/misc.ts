import { Station, Weather } from '../models/indego';

export interface KioskSnapshot {
  station: Station
  weather: Weather
  at ?: Date
}
