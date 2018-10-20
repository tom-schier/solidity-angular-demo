import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';
import { ExchangeRate } from '../models/ExchangeRate';
import { BorrowerHoldings } from '../data/borrower-holdings';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {

  public theToken: string;
  public currencyHoldings: number;
  public tokenHoldings: number;
  private borrowHold: BorrowerHoldings;
  public agreedRate: number;

  constructor(private _exchangeSvc: ExchangeRatesService) {

    this.theToken = 'No Token';
    this.borrowHold = new BorrowerHoldings();
    this.agreedRate = 0.1;
   }

  ngOnInit() {
    this.theToken = 'NEO';
    let usdHoldings = this.borrowHold.holdings.find(x => x.code == 'USD');
    if (usdHoldings != null)
      this.currencyHoldings = usdHoldings.amount;
    else
    this.currencyHoldings = 0;

    let tokenHoldings = this.borrowHold.holdings.find(x => x.code == this.theToken);
    if (tokenHoldings != null)
      this.tokenHoldings = tokenHoldings.amount;
    else 
      this.tokenHoldings = 0;
  }

}
