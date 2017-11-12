import { WeatherCond } from './weather-cond'
import { WeatherMain } from './weather-main'

export class CityWeather {
    name: string;
    weather: WeatherCond[];
    main: WeatherMain;
}
