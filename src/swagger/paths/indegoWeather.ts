export default {
  '/indego-data-fetch-and-store-it-db': {
    post: {
      tags: ['IndegoWeather'],
      summary: 'Fetch data and store it in database',
      operationId: 'Fetch',
      parameters: [],
      responses: {
        204: {
          description: 'Ok',
          headers: {},
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'UnAuthorized',
        },
        503: {
          description: 'Server Error',
        },
        504: {
          description: 'ECONNABORTED',
        },
      },
      deprecated: false,
    },
  },
  '/stations': {
    get: {
      tags: ['IndegoWeather'],
      summary: 'Get all sations snapshot at specific time',
      operationId: 'GetSnapshot',
      parameters: [
        {
          name: 'at',
          in: 'query',
          description: 'Target snapshot date',
          required: true,
          schema: {
            type: 'string',
            format: 'date-time',
          },
        },
      ],
      responses: {
        200: {
          description: 'Ok',
          headers: {},
          content: {
            'application/json': {
              example: {
                example: {
                  stations: [
                    {
                      geometry: {
                        coordinates: [
                          -75.16374,
                          39.95378,
                        ],
                        type: 'Point',
                      },
                      properties: {
                        id: 3004,
                        name: 'Municipal Services Building Plaza',
                        coordinates: [
                          -75.16374,
                          39.95378,
                        ],
                        totalDocks: 30,
                        docksAvailable: 24,
                        bikesAvailable: 4,
                        classicBikesAvailable: 2,
                        smartBikesAvailable: 0,
                        electricBikesAvailable: 2,
                        rewardBikesAvailable: 4,
                        rewardDocksAvailable: 24,
                        kioskStatus: 'FullService',
                        kioskPublicStatus: 'Active',
                        kioskConnectionStatus: 'Active',
                        kioskType: 1,
                        addressStreet: '1401 John F. Kennedy Blvd.',
                        addressCity: 'Philadelphia',
                        addressState: 'PA',
                        addressZipCode: '19102',
                        bikes: [
                          {
                            dockNumber: 17,
                            isElectric: true,
                            isAvailable: false,
                            battery: 0.8,
                          },
                          {
                            dockNumber: 19,
                            isElectric: false,
                            isAvailable: false,
                            battery: null,
                          },
                          {
                            dockNumber: 22,
                            isElectric: true,
                            isAvailable: true,
                            battery: 0.8,
                          },
                          {
                            dockNumber: 24,
                            isElectric: false,
                            isAvailable: true,
                            battery: null,
                          },
                          {
                            dockNumber: 26,
                            isElectric: true,
                            isAvailable: true,
                            battery: 0.8,
                          },
                          {
                            dockNumber: 30,
                            isElectric: false,
                            isAvailable: true,
                            battery: null,
                          },
                        ],
                        closeTime: null,
                        eventEnd: null,
                        eventStart: null,
                        isEventBased: false,
                        isVirtual: false,
                        kioskId: 3004,
                        notes: null,
                        openTime: null,
                        publicText: '',
                        timeZone: null,
                        trikesAvailable: 0,
                        latitude: 39.95378,
                        longitude: -75.16374,
                      },
                      type: 'Feature',
                    },
                    {
                      geometry: {
                        coordinates: [
                          -75.14403,
                          39.94733,
                        ],
                        type: 'Point',
                      },
                      properties: {
                        id: 3005,
                        name: 'Welcome Park, NPS',
                        coordinates: [
                          -75.14403,
                          39.94733,
                        ],
                        totalDocks: 13,
                        docksAvailable: 10,
                        bikesAvailable: 3,
                        classicBikesAvailable: 3,
                        smartBikesAvailable: 0,
                        electricBikesAvailable: 0,
                        rewardBikesAvailable: 3,
                        rewardDocksAvailable: 10,
                        kioskStatus: 'FullService',
                        kioskPublicStatus: 'Active',
                        kioskConnectionStatus: 'Active',
                        kioskType: 1,
                        addressStreet: '191 S. 2nd St.',
                        addressCity: 'Philadelphia',
                        addressState: 'PA',
                        addressZipCode: '19106',
                        bikes: [
                          {
                            dockNumber: 2,
                            isElectric: false,
                            isAvailable: true,
                            battery: null,
                          },
                          {
                            dockNumber: 9,
                            isElectric: false,
                            isAvailable: true,
                            battery: null,
                          },
                          {
                            dockNumber: 11,
                            isElectric: false,
                            isAvailable: true,
                            battery: null,
                          },
                        ],
                        closeTime: null,
                        eventEnd: null,
                        eventStart: null,
                        isEventBased: false,
                        isVirtual: false,
                        kioskId: 3005,
                        notes: null,
                        openTime: null,
                        publicText: '',
                        timeZone: null,
                        trikesAvailable: 0,
                        latitude: 39.94733,
                        longitude: -75.14403,
                      },
                      type: 'Feature',
                    },
                  ],
                  weather: {
                    coord: {
                      lon: -75.16,
                      lat: 39.95,
                    },
                    weather: [
                      {
                        id: 804,
                        main: 'Clouds',
                        description: 'overcast clouds',
                        icon: '04d',
                      },
                    ],
                    base: 'stations',
                    main: {
                      temp: 284.4,
                      feels_like: 279.75,
                      temp_min: 283.15,
                      temp_max: 285.37,
                      pressure: 1016,
                      humidity: 76,
                    },
                    visibility: 10000,
                    wind: {
                      speed: 5.7,
                      deg: 340,
                    },
                    clouds: {
                      all: 90,
                    },
                    dt: 1605205221,
                    sys: {
                      type: 1,
                      id: 5344,
                      country: 'US',
                      sunrise: 1605181374,
                      sunset: 1605217619,
                    },
                    timezone: -18000,
                    id: 4560349,
                    name: 'Philadelphia',
                    cod: 200,
                  },
                  at: '2020-11-12T18:23:24.947Z',
                },
              },
            },
          },
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'UnAuthorized',
        },
        503: {
          description: 'Server Error',
        },
      },
      deprecated: false,
    },
  },
  '/stations/{kioskId}': {
    get: {
      tags: ['IndegoWeather'],
      summary: 'Get specific kiosk snapshot at specific time',
      operationId: 'GetKiosk',
      parameters: [
        {
          name: 'kioskId',
          in: 'path',
          description: 'Target kioskId',
          required: true,
          schema: {
            type: 'number',
          },
        },
        {
          name: 'at',
          in: 'query',
          description: 'Target snapshot date',
          required: true,
          schema: {
            type: 'string',
            format: 'date-time',
          },
        },
      ],
      responses: {
        200: {
          description: 'Ok',
          headers: {},
          content: {
            'application/json': {
              example: {
                weather: {
                  coord: {
                    lon: -75.16,
                    lat: 39.95,
                  },
                  weather: [
                    {
                      id: 804,
                      main: 'Clouds',
                      description: 'overcast clouds',
                      icon: '04d',
                    },
                  ],
                  base: 'stations',
                  main: {
                    temp: 284.4,
                    feels_like: 279.75,
                    temp_min: 283.15,
                    temp_max: 285.37,
                    pressure: 1016,
                    humidity: 76,
                  },
                  visibility: 10000,
                  wind: {
                    speed: 5.7,
                    deg: 340,
                  },
                  clouds: {
                    all: 90,
                  },
                  dt: 1605205221,
                  sys: {
                    type: 1,
                    id: 5344,
                    country: 'US',
                    sunrise: 1605181374,
                    sunset: 1605217619,
                  },
                  timezone: -18000,
                  id: 4560349,
                  name: 'Philadelphia',
                  cod: 200,
                },
                at: '2020-11-12T18:23:24.947Z',
                station: {
                  geometry: {
                    coordinates: [
                      -75.16374,
                      39.95378,
                    ],
                    type: 'Point',
                  },
                  properties: {
                    id: 3004,
                    name: 'Municipal Services Building Plaza',
                    coordinates: [
                      -75.16374,
                      39.95378,
                    ],
                    totalDocks: 30,
                    docksAvailable: 24,
                    bikesAvailable: 4,
                    classicBikesAvailable: 2,
                    smartBikesAvailable: 0,
                    electricBikesAvailable: 2,
                    rewardBikesAvailable: 4,
                    rewardDocksAvailable: 24,
                    kioskStatus: 'FullService',
                    kioskPublicStatus: 'Active',
                    kioskConnectionStatus: 'Active',
                    kioskType: 1,
                    addressStreet: '1401 John F. Kennedy Blvd.',
                    addressCity: 'Philadelphia',
                    addressState: 'PA',
                    addressZipCode: '19102',
                    bikes: [
                      {
                        dockNumber: 17,
                        isElectric: true,
                        isAvailable: false,
                        battery: 0.8,
                      },
                      {
                        dockNumber: 19,
                        isElectric: false,
                        isAvailable: false,
                        battery: null,
                      },
                      {
                        dockNumber: 22,
                        isElectric: true,
                        isAvailable: true,
                        battery: 0.8,
                      },
                      {
                        dockNumber: 24,
                        isElectric: false,
                        isAvailable: true,
                        battery: null,
                      },
                      {
                        dockNumber: 26,
                        isElectric: true,
                        isAvailable: true,
                        battery: 0.8,
                      },
                      {
                        dockNumber: 30,
                        isElectric: false,
                        isAvailable: true,
                        battery: null,
                      },
                    ],
                    closeTime: null,
                    eventEnd: null,
                    eventStart: null,
                    isEventBased: false,
                    isVirtual: false,
                    kioskId: 3004,
                    notes: null,
                    openTime: null,
                    publicText: '',
                    timeZone: null,
                    trikesAvailable: 0,
                    latitude: 39.95378,
                    longitude: -75.16374,
                  },
                  type: 'Feature',
                },
              },
            },
          },
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'UnAuthorized',
        },
        503: {
          description: 'Server Error',
        },
      },
      deprecated: false,
    },
  },
};
