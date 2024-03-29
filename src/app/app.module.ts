import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { LenderComponent } from './lender/lender.component';
import { VleppoComponent } from './vleppo/vleppo.component';
import { ExchangeRatesService } from './services/exchange-rates.service';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { FeesComponent } from './fees/fees.component';
import { ActionsComponent } from './actions/actions.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { VlxToEthService } from './services/vlx-to-eth.service';
import Web3 from 'web3';


// Create an Injection Token with web3 inside
//export const WEB3 = new InjectionToken<Web3>('web3');

@NgModule({
  declarations: [
    AppComponent,
    BorrowerComponent,
    LenderComponent,
    VleppoComponent,
    ExchangeRatesComponent,
    FeesComponent,
    ActionsComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExchangeRatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
