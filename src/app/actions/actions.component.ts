import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { VlxToEthService } from '../services/vlx-to-eth.service';
import Web3 from 'web3';

export const WEB3 = new InjectionToken<Web3>('web3', {
  providedIn: 'root',
  factory: () => new Web3(Web3.givenProvider)
});

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  web3: any;

  constructor(@Inject(WEB3) private theEthWeb: Web3) {
    this.web3 = theEthWeb;
  }

  ngOnInit() {
    this.web3.eth.getId()
      .then(id => console.log("You are connected on " + id));
  }

  getAccounts(){
    this.web3.eth.getAccounts((val) => {
      console.log(val);
    })
  }

  private getNet(id: number): string {
    const networks = {
      1: 'mainnet',
      3: 'ropsten',
      4: 'rinkeby',
      42: 'koven',
      5777: 'local'
    };
    return networks[id];
  }

  deployContract(){
      this.web3.getAccountInfo().then(val => {
        console.log(val)
      },
      err => {console.log(err)}
      )
  }
}
