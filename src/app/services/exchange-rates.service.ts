import { Injectable } from '@angular/core';
import { ExchangeRate } from '../models/exchangeRates.model';
import { Rate } from '../models/rate.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  private allRates: Array<ExchangeRate> = [];

  private obRatesChanged = new Subject<ExchangeRate[]>();
  ratesChanged$ = this.obRatesChanged.asObservable();

  constructor() {
  }


  public AddOrUpdateRate(aRate: ExchangeRate) {
    this.obRatesChanged.next(this.allRates);
  }

  public RemoveRate(aRate: ExchangeRate) {
    this.obRatesChanged.next(this.allRates);
  }

}
