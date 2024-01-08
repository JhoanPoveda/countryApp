import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-byRegionPage',
  templateUrl: './byRegionPage.component.html',
})
export class ByRegionPageComponent {

  countries: Country[] = [];
  isLoading: boolean = false;

  constructor(private _countriesService : CountriesService) { }

  searchByRegion(region: string):void{
    this.isLoading = true;

    this._countriesService.searchCountry(region)
    .subscribe((countries)=>{
      this.countries = countries
      this.isLoading = false;

    })
  }
}
