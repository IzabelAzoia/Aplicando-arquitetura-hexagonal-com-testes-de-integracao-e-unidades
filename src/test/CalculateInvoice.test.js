"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CalculateInvoice_1 = __importDefault(require("../src/CalculateInvoice"));
test("Deve calcular a fatura", async function () {
    const transactionDAO = {
        async getTransactions(cardNumber, month, year) {
            return [
                { amount: 100, currency: "BRL" },
                { amount: 1000, currency: "BRL" },
                { amount: 600, currency: "USD" }
            ];
        }
    };
    const currencyGateway = {
        async getCurrencies() {
            return {
                usd: 2
            };
        }
    };
    const calculateInvoice = new CalculateInvoice_1.default(transactionDAO, currencyGateway);
    const output = await calculateInvoice.execute("1234");
    expect(output.total).toBe(2300);
});
