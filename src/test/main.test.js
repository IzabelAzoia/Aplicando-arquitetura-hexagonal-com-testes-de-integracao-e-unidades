"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
test("Deve testar a API", async function () {
    const response = await axios_1.default.get("http://localhost:3000/cards/1234/invoices");
    const output = response.data;
});
