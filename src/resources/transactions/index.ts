import { Base } from "../base";
import { 
    PaymentTransactionFetchResponse,
    CardTransactionListResponse, 
    CardTransactionQueryParams,
    AchTransactionQueryParams,
    AchTransactionQueryResponse
} from "./types";

const paymentList = "/payment/transactions";
const paymentFetch = "/payment/transaction";

const achResource = "/ach/transactions";


export class Transactions extends Base {

    /**
     * Fetches a transaction by its ID.
     *
     * @param {string} trxn_id - The ID of the transaction.
     * @return {Promise<PaymentTransactionFetchResponse>} A promise that resolves to the transaction result.
     */
    async fetchPaymentTransactionById(trxn_id: string): Promise<PaymentTransactionFetchResponse[]> {
        const response: { data: PaymentTransactionFetchResponse[] } = await this.request(`${paymentFetch}/${trxn_id}`);
        console.log("RESPONSE", response.data);
        const transformedData: PaymentTransactionFetchResponse[] = response.data.map(obj => {
            return Object.entries(obj).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
            }, {} as PaymentTransactionFetchResponse);
        });
        console.log("transformedData", transformedData);

        return transformedData;
    }

    /**
     * Retrieves a list of transactions.  The maximum number of transactions returned per API call is 250. If you require more than 250 use the 'limit' and 'offset' parameters
     *
     * @return {Promise<CardTransactionListResponse>} A promise that resolves to an array of transaction objects.
     */
    listCardTransactions(queryParams?: CardTransactionQueryParams): Promise<CardTransactionListResponse> {
        return this.request<CardTransactionListResponse>(`${paymentList}`, queryParams);
    }

    /**
     * Retrieves a list of transactions by the customer profile ID.
     *
     * @param {string} profile_id - The ID of the profile.
     * @return {Promise<PaymentTransactionFetchResponse>} A promise that resolves to an array of transactions.
     */
    listCardTransactionsByProfileId(profile_id: string): Promise<PaymentTransactionFetchResponse> {
        return this.request(`${paymentList}/${profile_id}`);
    }

    /**
     * Retrieves a list of transactions by the customer transaction batch ID.
     *
     * @param {string} batch_id - The ID of the batch.
     * @return {Promise<PaymentTransactionFetchResponse>} A promise that resolves to an array of transactions.
     */
    listCardTransactionsByBatchId(batch_id: string): Promise<PaymentTransactionFetchResponse> {
        return this.request(`${paymentList}`);
    }

    /**
     * Fetches an ACH transaction by its ID.
     *
     * @param {string} transaction_id - The ID of the ACH transaction.
     * @return {Promise<AchTransactionQueryResponse>} A promise that resolves to the transaction.
     */
    fetchAchTransactionById(transaction_id: string): Promise<AchTransactionQueryResponse> {
        return this.request(`${achResource}/${transaction_id}`);
    }

    /**
     * Retrieves a list of ACH transactions.  The maximum number of transactions returned per API call is 250. If you require more than 250 use the 'limit' and 'offset' parameters
     *
     * @return {Promise<AchTransactionQueryResponse[]>} A promise that resolves to an array of transactions.
     */
    listAchTransactions(queryParams?: AchTransactionQueryParams): Promise<AchTransactionQueryResponse[]> {
        return this.request<AchTransactionQueryResponse[]>(`${paymentList}`, queryParams);
    }



}