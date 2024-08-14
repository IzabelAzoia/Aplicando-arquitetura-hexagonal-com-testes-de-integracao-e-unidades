import CalculateInvoice from "./CalculateInvoice";
import HttpService from "./HttpServer";

export default class InvoiceController {
    constructor (
        readonly httpServer: HttpService, 
        readonly calculateInvoice: CalculateInvoice
    ) {
        httpServer.register("get","/cards/:cardNumber/invoices", async (params: any, body: any) => {
            const total = await this.calculateInvoice.execute(params.cardNumber);
            return total;
        });
    }
}