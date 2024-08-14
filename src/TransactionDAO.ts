export default interface transactionDAO {
    getTransactions (cardNumber: string, month: number, year: number): Promise<any>;
}