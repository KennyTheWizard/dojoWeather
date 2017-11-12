import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CityWeather } from './../city-weather';
import { WeatherService } from './../weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherDisplayComponent implements OnInit {

  cityParam: string;
  currCityWeather: CityWeather;
  constructor(private _route: ActivatedRoute, private _weather: WeatherService ) {
  }


  ngOnInit() {
    this._route.paramMap.subscribe( params => {
      this.cityParam = params.get('cityName');
      let cityName: string;
      switch (this.cityParam) {
        case 'seattle':
        cityName = 'Seattle,US';
        break;
        case 'sanjose':
        cityName = 'San Jose,US';
        break;
        case 'burbank':
        cityName = 'Burbank,US';
        break;
        case 'dallas':
        cityName = 'Dallas,US';
        break;
        case 'dc':
        cityName = 'Washington DC,US';
        break;
        case 'chicago':
        cityName = 'Chicago,US';
        break;
        case 'tulsa':
        cityName = 'Tulsa,US';
        break;
        
        default:
        cityName = 'Tulsa,US';
        break;
      }
      this._weather.getWeather(cityName).then(resp=>{
        this.currCityWeather = resp;
      }).catch(errors => {
        console.error(errors);
      })
    })
  }

}
