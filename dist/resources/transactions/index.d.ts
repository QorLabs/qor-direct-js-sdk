import { Base } from "../base";
import { PaymentTransactionFetchResponse, PaymentTransactionListResponse, PaymentTransactionQueryParams, AchTransactionQueryParams, AchTransactionQueryResponse } from "./types";
export declare class Transactions extends Base {
    fetchPaymentTransactionById(trxn_id: string): Promise<PaymentTransactionFetchResponse>;
    listPaymentTransactions(queryParams?: PaymentTransactionQueryParams): Promise<PaymentTransactionListResponse>;
    listPaymentTransactionsByProfileId(profile_id: string): Promise<PaymentTransactionListResponse>;
    listPaymentTransactionsByBatchId(batch_id: string): Promise<PaymentTransactionListResponse>;
    fetchAchTransactionById(transaction_id: string): Promise<AchTransactionQueryResponse>;
    listAchTransactions(queryParams?: AchTransactionQueryParams): Promise<AchTransactionQueryResponse[]>;
}
