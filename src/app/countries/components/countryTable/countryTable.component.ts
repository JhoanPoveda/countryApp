import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-countryTable',
  templateUrl: './countryTable.component.html',
  styleUrls: ['./countryTable.component.css']
})
export class CountryTableComponent  {
  @Input() public countries: Country[] = [];

}
