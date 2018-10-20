import { Holdings } from "../models/holdings";

export class VleppoHoldings {
    public holdings: Array<Holdings> = [];

    constructor() {
        this.holdings = [
            { code: "USD", amount: 1000000},
            { code: "VLX", amount: 200000},
        ]
    }
}