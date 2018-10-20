import { Holdings } from "../models/holdings";

export class LenderHoldings {
    public holdings: Array<Holdings> = [];

    constructor() {
        this.holdings = [
            { code: "USD", amount: 500000},
            { code: "VLX", amount: 200000},
        ]
    }
}