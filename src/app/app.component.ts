import { Component } from '@angular/core';
import {VleppoComponent} from './vleppo/vleppo.component';
import {BorrowerComponent} from './borrower/borrower.component';
import {LenderComponent} from './lender/lender.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VlxDemo';
}
