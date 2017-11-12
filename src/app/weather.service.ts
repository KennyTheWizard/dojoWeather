import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CityWeather } from './city-weather';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather'
  apiKey = "" // insert key here

  constructor(private _http:Http) { }

  getWeather(citySearch:string):Promise<CityWeather>{
    return this._http.get(`${this.apiUrl}/?q=${citySearch}&APPID=${this.apiKey}&units=imperial`).map(resp=>resp.json()).toPromise();
  }
}
