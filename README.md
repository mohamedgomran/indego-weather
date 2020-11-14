# IndegoWeather

 Simple Node.js server to fetch and store data from [Indego](https://www.rideindego.com/) and [openeathermap](https://openweathermap.org/current#name) and provide the hitorical data to be queried using data and/or specific kioskId 

Explore all endpoints from here [demo](https://lit-coast-74701.herokuapp.com/api/v1/explore/) 

* All config varaiables are in config.ts file.
* All env varialbles are optional MONGO_URL is required.
* Any env variable can be overidden by passing the env.

To start development server
```
$ export MONGO_URL=yourmongoco
$ npm run start:dev
```
To start the prodcution version
```
$ export MONGO_URL=yourmongoco
$ npm run build
$ npm start
```

Testing
```
$ export MONGO_URL=yourmongoco
$ npm test
```