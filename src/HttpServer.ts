export default interface HttpService {
    register (method: string, url: string, callback: Function): Promise<void>;
    listem (port: number): Promise<void>;
}