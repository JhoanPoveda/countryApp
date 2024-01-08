import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from './../../services/countries.service';

@Component({
  selector: 'app-byCapitalPage',
  templateUrl: './byCapitalPage.component.html',
})
export class ByCapitalPageComponent  {

  isLoading: boolean = false;
  countries: Country[] = [];
  constructor(private _countriesService: CountriesService) { }


  searchByCapital(capital: string):void{
    this.isLoading = true;
    this._countriesService.searchCapital(capital)
    .subscribe((countries)=>{
      this.countries = countries;
      this.isLoading = false;
    })
  }

}
