import { Injectable } from "@angular/core";
import * as Web3 from "web3";
import * as TruffleContract from "truffle-contract";
declare let require: any;
declare let window: any;

@Injectable({
  providedIn: "root"
})
export class VlxToEthService {
  private web3Provider: any;
  private contracts: {};
  private web3: any;

  constructor() {
    if (typeof window.web3 !== "undefined") {
      this.web3Provider = window.web3.currentProvider;
    } else {
      this.web3Provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
    }
    this.web3 = new Web3(this.web3Provider);
  }

  getAccountInfo() {
    this.web3.eth.getAccounts();
    // return new Promise((resolve, reject) => {
    //   window.web3.eth.getCoinbase((err, account) =>{
    //     if (err === null) {
    //       if (this.web3 != null) {
    //         let account = "0xa4360dBA22905eFe3120540d87D986EeBd0B9fBF";
    //         this.web3.eth.getBalance(account, (err, balance) => {
    //           if (err === null) {
    //             return resolve({ fromAccount: account, balance: this.web3.fromWei(balance, 'ether') });
    //           } else {
    //             return reject('error!');
    //           }
    //         }, error => {console.log(error)});
    //       }

    //     }
    //   });
    // });
  }

}