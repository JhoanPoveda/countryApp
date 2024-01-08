import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countryPage',
  templateUrl: './countryPage.component.html',
})
export class CountryPageComponent implements OnInit {

  country?: Country


  constructor( private activatedRoute: ActivatedRoute,
    private router: Router,
    private _countriesService : CountriesService
    ) { }

  ngOnInit() {
    // params : params['id'] ========= ({id})
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this._countriesService.searchCountryByAlphaCode( id ))
    ).subscribe(  country  =>{
      if(!country) return this.router.navigateByUrl('');
      this.country = country;
      return;
    });
  }



}
