import { Base } from "../base";
import { PaymentTransactionFetchResponse, CardTransactionListResponse, CardTransactionQueryParams, AchTransactionQueryParams, AchTransactionQueryResponse } from "./types";
export declare class Transactions extends Base {
    fetchPaymentTransactionById(trxn_id: string): Promise<PaymentTransactionFetchResponse[]>;
    listCardTransactions(queryParams?: CardTransactionQueryParams): Promise<CardTransactionListResponse>;
    listCardTransactionsByProfileId(profile_id: string): Promise<PaymentTransactionFetchResponse>;
    listCardTransactionsByBatchId(batch_id: string): Promise<PaymentTransactionFetchResponse>;
    fetchAchTransactionById(transaction_id: string): Promise<AchTransactionQueryResponse>;
    listAchTransactions(queryParams?: AchTransactionQueryParams): Promise<AchTransactionQueryResponse[]>;
}
