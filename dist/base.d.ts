import "isomorphic-unfetch";
type Config = {
    apiKey: string;
    clientKey: string;
    requestId?: string;
    baseUrl?: string;
};
export declare abstract class Base {
    private apiKey;
    private clientKey;
    private requestId;
    private baseUrl;
    constructor(config: Config);
    protected request<T>(endpoint: string, queryParams?: Record<string, any>, options?: RequestInit): Promise<T>;
}
export {};
