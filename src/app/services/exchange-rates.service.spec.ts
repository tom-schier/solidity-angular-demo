import { TestBed, inject } from '@angular/core/testing';

import { ExchangeRatesService } from './exchange-rates.service';
import { ExchangeRate } from '../models/ExchangeRate';

describe('ExchangeRatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeRatesService]
    });
  });

  it('should be created', inject([ExchangeRatesService], (service: ExchangeRatesService) => {
    expect(service).toBeTruthy();
  }));

  it('Initital rate count is 3', inject([ExchangeRatesService], (service: ExchangeRatesService) => {
    expect(service.allRates.length).toEqual(3);
  }));

  it('Add rate and ensure count id 4', inject([ExchangeRatesService], (service: ExchangeRatesService) => {
    let newRate = new ExchangeRate();
    newRate.code1 = 'BEO';
    newRate.code2 = 'USD';
    newRate.currentExchangeRate = 3456.34;
    newRate.currentExchangeRateDate = new Date('02-FEB-2018')
    service.AddOrUpdateRate(newRate);
    expect(service.allRates.length).toEqual(4);
  }));

  it('Attempt to add an existing rate', inject([ExchangeRatesService], (service: ExchangeRatesService) => {
    let newRate = new ExchangeRate();
    newRate.code1 = 'VLX';
    newRate.code2 = 'USD';
    newRate.currentExchangeRate = 3456.34;
    newRate.currentExchangeRateDate = new Date('02-FEB-2018')
    service.AddOrUpdateRate(newRate);
    expect(service.allRates.length).toEqual(3);
  }));

  it('Update an existing rate', inject([ExchangeRatesService], (service: ExchangeRatesService) => {
    let newRate = new ExchangeRate();
    newRate.code1 = 'VLX';
    newRate.code2 = 'USD';
    newRate.currentExchangeRate = 3456.34;
    newRate.currentExchangeRateDate = new Date('03-FEB-2018');
    service.AddOrUpdateRate(newRate);

    let aRate = service.allRates[0];
    expect(service.allRates.length).toEqual(3);
    expect(aRate.currentExchangeRate).toEqual(3456.34);
    expect(aRate.currentExchangeRateDate).toEqual(newRate.currentExchangeRateDate);
  }));

  it('Delete an existing rate', inject([ExchangeRatesService], (service: ExchangeRatesService) => {
    let newRate = new ExchangeRate();
    newRate.code1 = 'VLX';
    newRate.code2 = 'USD';
    newRate.currentExchangeRate = 3456.34;
    newRate.currentExchangeRateDate = new Date('02-FEB-2018')
    service.RemoveRate(newRate);
    expect(service.allRates.length).toEqual(2);
  }));


});
