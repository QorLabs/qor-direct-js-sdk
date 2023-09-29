import { Base } from "../base";
import { CardTransactionQueryParams, CardTransactionQueryResponse, AchTransactionQueryParams, AchTransactionQueryResponse } from "./types";
export declare class Transactions extends Base {
    fetchCardTransactionById(trxn_id: string): Promise<CardTransactionQueryResponse>;
    listCardTransactions(queryParams?: CardTransactionQueryParams): Promise<CardTransactionQueryResponse[]>;
    listCardTransactionsByProfileId(profile_id: string): Promise<CardTransactionQueryResponse[]>;
    listCardTransactionsByBatchId(batch_id: string): Promise<CardTransactionQueryResponse[]>;
    fetchAchTransactionById(transaction_id: string): Promise<AchTransactionQueryResponse>;
    listAchTransactions(queryParams?: AchTransactionQueryParams): Promise<AchTransactionQueryResponse[]>;
}
