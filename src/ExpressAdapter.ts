import HttpService from "./HttpServer";
import express from "express"

export default class ExpressAdapter implements HttpService{
    app: any;

    constructor() {
        this.app = express();
    }
    async register(method: string, url: string, callback: Function): Promise<void> {
        this.app[method](url, async function (req: any, res: any) {
           const output = await callback(req.params, req.body);
           res.json(output);
        });
    }
    async listem(port: number): Promise<void> {
       return this.app.listen(port); 
    }
}