import { Holdings } from "../models/holdings";

export class BorrowerHoldings {
    public holdings: Array<Holdings> = [];

    constructor() {
        this.holdings = [
            { code: "USD", amount: 1000},
            { code: "NEO", amount: 500},
        ]
    }
}