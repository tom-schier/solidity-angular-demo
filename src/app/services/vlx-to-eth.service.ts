import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VlxToEthService {


  private obContractChanged = new Subject<any>();
  contractChanged$ = this.obContractChanged.asObservable();

  constructor() {
  }

  public CreateContract() {
  }
}
