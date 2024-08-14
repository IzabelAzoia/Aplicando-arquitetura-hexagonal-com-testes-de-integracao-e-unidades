import CalculateInvoice from "../CalculateInvoice"
import currencyGateway from "../CurrencyGateway";
import transactionDAO from "../TransactionDAO";

test("Deve calcular a fatura", async function () {
    const transactionDAO: transactionDAO = {
        async getTransactions (cardNumber: string, month: number, year: number): Promise<any> {
            return [
                { amount: 100, currency: "BRL"},
                { amount: 1000, currency: "BRL"},
                { amount: 600, currency: "USD"}
            ];
        }
    };
    const currencyGateway: currencyGateway = {
        async getCurrencies (): Promise<any> {
            return {
                usd: 2
            }
        }
    }


    const calculateInvoice = new CalculateInvoice(transactionDAO, currencyGateway);
    const output = await calculateInvoice.execute("1234");
    expect(output.total).toBe(2300)
})