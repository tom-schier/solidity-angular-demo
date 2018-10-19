import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { LenderComponent } from './lender/lender.component';
import { VleppoComponent } from './vleppo/vleppo.component';

@NgModule({
  declarations: [
    AppComponent,
    BorrowerComponent,
    LenderComponent,
    VleppoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
