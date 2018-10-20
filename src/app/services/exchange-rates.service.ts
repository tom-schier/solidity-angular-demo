import { Injectable } from '@angular/core';
import {  ExchangeRate } from '../models/ExchangeRate';
import { Rate } from '../models/rate.model';
import { Subject } from 'rxjs';
import { SampleData } from '../data/demo-exchangerates';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  public allRates: Array<ExchangeRate> = [];
  private sampleData: SampleData = new SampleData();

  private obRatesChanged = new Subject<ExchangeRate[]>();
  ratesChanged$ = this.obRatesChanged.asObservable();

  constructor() {
    this.allRates = this.sampleData.exRates;
  }

  public AddOrUpdateRate(aRate: ExchangeRate) {
    let idx = this.allRates.findIndex(x => x.code1 == aRate.code1 && x.code2 == aRate.code2);
    if (idx == -1)
      this.allRates.push(aRate);
    else {
      this.allRates[idx] = aRate;
    }
    this.obRatesChanged.next(this.allRates);
  }

  public RemoveRate(aRate: ExchangeRate) {
    let idx = this.allRates.findIndex(x => x.code1 == aRate.code1 && x.code2 == aRate.code2);
    this .allRates.splice(idx, 1);
    this.obRatesChanged.next(this.allRates);
  }

}
