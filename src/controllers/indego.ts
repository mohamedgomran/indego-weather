import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import IndegoModel, { Indego } from '../models/indego';
import { KioskSnapshot } from '../types';
import CustomError from '../helpers/customError';

const openweathermapConfig: AxiosRequestConfig = {
  method: 'get',
  url: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    q: 'Philadelphia',
    appid: '35798ed41aa14542f9a5198dd86a3087',
  },
};

const indegoConfig: AxiosRequestConfig = {
  method: 'get',
  url: 'https://kiosks.bicycletransit.workers.dev/phl',
};

/**
 * Fetches data from indego an openweathermap ans saves it into db
 * @returns Prmise<Indego> document created
 */
export const fetchAndStore = async (): Promise<Indego> => {
  const [{ data: openWeatherData }, { data: indegoData }]: AxiosResponse[] = await Promise
    .all([axios(openweathermapConfig), axios(indegoConfig)]);
  return IndegoModel.create({
    stations: indegoData.features,
    weather: openWeatherData,
  });
};

/**
 * Gets a snapshot of indego and openweather data at specific date
 * @param at is the date
 * @returns Promise<Indego>
 */
export const getSnapshotByDate = async (at: Date): Promise<Indego> => {
  const data = await IndegoModel
    .findOne({ at: { $gte: at } }, { _id: 0, __v: 0 })
    .exec();
  if (!data) throw new CustomError(404, 'NOT_FOUND', 'Not found');
  return data;
};

/**
 *
 * @param kioskId is the target kiosk is
 * @param at is the date
 * @returns Promise<KioskSnapshot>
 */
export const getKioskSnapshot = async (kioskId: number, at: Date)
: Promise<KioskSnapshot> => {
  const data = await IndegoModel
    .findOne(
      { 'stations.properties.kioskId': kioskId, at: { $gte: at } },
      {
        at: 1, weather: 1, stations: { $elemMatch: { 'properties.kioskId': kioskId } },
      },
    )
    .exec();
  if (!data) throw new CustomError(404, 'NOT_FOUND', 'Not found');
  return { ...data.toJSON(), station: data.stations[0], stations: undefined };
};
