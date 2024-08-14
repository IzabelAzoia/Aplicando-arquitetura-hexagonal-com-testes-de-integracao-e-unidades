import transactionDAO from "./TransactionDAO";
import currencyGateway from "./CurrencyGateway";
import Invoice from "./Invoice";
import express from "express";

export default class CalculateInvoice {
    constructor (
        readonly transactionDAO: transactionDAO,
        readonly currencyGateway: currencyGateway
    ) {

    }
    async execute (cardNumber: string) {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const currencies = await this.currencyGateway.getCurrencies();
        const transactions = await this.transactionDAO.getTransactions(cardNumber, month, year);
        const invoice = new Invoice(transactions, currencies);
        const total = invoice.getTotal();
        return {
            total
        };
    }
}