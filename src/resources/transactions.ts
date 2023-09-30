import { Base } from "../base";
import { 
    PaymentTransactionFetchResponse,
    PaymentTransactionListResponse, 
    PaymentTransactionQueryParams,
    AchTransactionQueryParams,
    AchTransactionQueryResponse
} from "../types/transactions";

const paymentList = "/payment/transactions";
const paymentFetch = "/payment/transaction";
const paymentProfileList = "/payment/transactions/profile";
const paymentBatchList = "/payment/transactions/batch";

const achResource = "/ach/transactions";

export class Transactions extends Base {

    /**
     * Fetches a transaction by its ID.
     *
     * @param {string} trxn_id - The ID of the transaction.
     * @return {Promise<PaymentTransactionFetchResponse>} A promise that resolves to the transaction result.
     * 
     * @example
     * ```js
     * import { QorDirectSDK } from "qor-direct-sdk"
     * 
     * const client = new QorDirectSDK({
     *   apiKey: 'YOUR_API_KEY',
     *   clientKey: 'YOUR_CLIENT_KEY',
     * });
     * 
     * client.transactions.fetchPaymentTransactionById("326881109961722").then((a) => console.log(a))
     * ```
     * 
     */
    async fetchPaymentTransactionById(trxn_id: string): Promise<PaymentTransactionFetchResponse> {
        const response: PaymentTransactionFetchResponse = await this.request(`${paymentFetch}/${trxn_id}`);
        return {
            status: response.status,
            code: response.code,
            message: response.message,
            data: response.data[0]
        };
    }

    /**
     * Retrieves a list of transactions.  The maximum number of transactions returned per API call is 250. If you require more than 250 use the 'limit' and 'offset' parameters
     *
     * @return {Promise<PaymentTransactionListResponse>} A promise that resolves to an array of transaction objects.
     */
    listPaymentTransactions(queryParams?: PaymentTransactionQueryParams): Promise<PaymentTransactionListResponse> {
        return this.request<PaymentTransactionListResponse>(`${paymentList}`, queryParams);
    }

    /**
     * Retrieves a list of payment transactions by profile ID.
     *
     * @param {string} profile_id - The ID of the profile.
     * @return {Promise<PaymentTransactionListResponse>} A promise that resolves to the payment transaction list response.
     */
    listPaymentTransactionsByProfileId(profile_id: string): Promise<PaymentTransactionListResponse> {
        return this.request(`${paymentProfileList}/${profile_id}`);
    }

    /**
     * Retrieves a list of payment transactions by batch ID.
     *
     * @param {string} batch_id - The ID of the batch to retrieve payment transactions for.
     * @return {Promise<PaymentTransactionListResponse>} - A promise that resolves to a response object containing the list of payment transactions.
     */
    listPaymentTransactionsByBatchId(batch_id: string): Promise<PaymentTransactionListResponse> {
        return this.request(`${paymentBatchList}/${batch_id}`);
    }

    /**
     * Fetches an ACH transaction by its ID.
     *
     * @param {string} transaction_id - The ID of the transaction to fetch.
     * @return {Promise<AchTransactionQueryResponse>} - A promise that resolves to the query response of the ACH transaction.
     */
    fetchAchTransactionById(transaction_id: string): Promise<AchTransactionQueryResponse> {
        return this.request(`${achResource}/${transaction_id}`);
    }

    /**
     * Queries the list of ACH transactions with optional query parameters.
     *
     * @param {AchTransactionQueryParams} [queryParams] - Optional query parameters to filter the list of transactions.
     * @return {Promise<AchTransactionQueryResponse[]>} - A promise that resolves to an array of ACH transaction query responses.
     */
    listAchTransactions(queryParams?: AchTransactionQueryParams): Promise<AchTransactionQueryResponse[]> {
        return this.request<AchTransactionQueryResponse[]>(`${paymentList}`, queryParams);
    }
}