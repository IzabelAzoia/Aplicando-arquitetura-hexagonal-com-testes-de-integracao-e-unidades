import Connection from "./Connection";
import TransactionDAO from "./TransactionDAO";

export default class TransactionDAODatabase implements TransactionDAO {

    constructor (readonly connection: Connection) {

    }

    async getTransactions(cardNumber: string, month: number, year: number): Promise<any> {
        
        const transactions = await this.connection.query("select * from branas.card_transaction where card_number = $1 and extract(month from data) = $2 and extract(year from date) = $3",
        [cardNumber, month, year]);
        return transactions;
    }
}