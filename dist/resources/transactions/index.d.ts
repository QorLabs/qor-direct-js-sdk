import { Base } from "../base";
import { CardTransactionResponse, CardQueryParams } from "./types";
export declare class Transactions extends Base {
    fetchCardTransactionById(trxn_id: string): Promise<CardTransactionResponse>;
    listCardTransactions(queryParams?: CardQueryParams): Promise<CardTransactionResponse[]>;
    listCardTransactionsByProfileId(profile_id: string): Promise<CardTransactionResponse[]>;
    listCardTransactionsByBatchId(batch_id: string): Promise<CardTransactionResponse[]>;
}
