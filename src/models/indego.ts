/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import {
  prop, getModelForClass, index, modelOptions, Severity,
} from '@typegoose/typegoose';

interface Bike {
  dockNumber: number
  isElectric: boolean
  isAvailable: boolean
  battery: number | null
}

export interface Station {
  geometry: {
    coordinates: number[]
    type: string
    properties: {
      id: number
      name: string
      coordinates: number[]
      totalDocks: number
      docksAvailable: number
      bikesAvailable: number
      classicBikesAvailable: number
      smartBikesAvailable: number
      electricBikesAvailable: number
      rewardBikesAvailable: number
      kioskStatus: string
      kioskPublicStatus: string
      kioskConnectionStatus: string
      kioskType: number
      addressStreet: string
      addressCity: string
      addressState: string
      addressZipCode: string
      bikes: Bike[]
      closeTime: Date | null,
      eventEnd: Date | null,
      eventStart: Date | null,
      isEventBased: boolean,
      isVirtual: boolean,
      kioskId: 3007,
      notes: string | null,
      openTime: Date | null,
      publicText: string,
      timeZone: string | null,
      trikesAvailable: number,
      latitude: number,
      longitude: number
    }
  }
}

export interface Weather {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    },
  ],
  base: string,
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

@index({ at: 1 })
@index({ 'stations.properties.kioskId': 1 })
@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: {
    toJSON: {
      transform: (_doc, ret) => {
        delete ret.__v;
        delete ret._id;
      },
    },
  },
})
export class Indego {
  @prop({ default: Date.now })
  at?: Date;

  @prop()
  public stations: Station[];

  @prop()
  public weather: Weather;
}

export default getModelForClass(Indego);
