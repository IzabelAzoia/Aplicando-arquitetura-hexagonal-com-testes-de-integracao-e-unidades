"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = __importDefault(require("../src/Invoice"));
test("Deve criar uma fatura", function () {
    const transactions = [
        { amount: 100, currency: "BRL" },
        { amount: 1000, currency: "BRL" },
        { amount: 600, currency: "USD" },
    ];
    const currencies = {
        usd: 2
    };
    const invoice = new Invoice_1.default(transactions, currencies);
    const total = invoice.getTotal();
    expect(total).toBe(2300);
});
