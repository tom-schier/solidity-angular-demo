import { Component, InjectionToken } from '@angular/core';
import {VleppoComponent} from './vleppo/vleppo.component';
import {BorrowerComponent} from './borrower/borrower.component';
import {LenderComponent} from './lender/lender.component';

import Web3 from 'web3';
//import { WEB3 } from '../app.module';


export const WEB3 = new InjectionToken<Web3>('web3', {
  providedIn: 'root',
  factory: () => new Web3(Web3.givenProvider)
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VlxDemo';
}
