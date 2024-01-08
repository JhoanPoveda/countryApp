import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-byCountryPage',
  templateUrl: './byCountryPage.component.html',
})
export class ByCountryPageComponent   {

  countries: Country[] = [];

  constructor(private _countriesService : CountriesService) { }

  searchByCountry(country: string):void{
    this._countriesService.searchCountry(country)
    .subscribe((countries)=>{
      this.countries = countries
    })
  }
}
