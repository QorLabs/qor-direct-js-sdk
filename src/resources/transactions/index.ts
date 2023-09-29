import { Base } from "../base";
import { CardTransactionResponse, CardQueryParams } from "./types";

const resource = "/payment/transactions";

export class Transactions extends Base {

    /**
     * Fetches a transaction by its ID.
     *
     * @param {string} trxn_id - The ID of the transaction.
     * @return {Promise<CardTransactionResponse>} A promise that resolves to the transaction.
     */
    fetchCardTransactionById(trxn_id: string): Promise<CardTransactionResponse> {
        return this.request(`${resource}/${trxn_id}`);
    }

    /**
     * Retrieves a list of transactions.  The maximum number of transactions returned per API call is 250. If you require more than 250 use the 'limit' and 'offset' parameters
     *
     * @return {Promise<CardTransaction[]>} A promise that resolves to an array of transactions.
     */
    listCardTransactions(queryParams?: CardQueryParams): Promise<CardTransactionResponse[]> {
        return this.request<CardTransactionResponse[]>(`${resource}`, queryParams);
      }

    /**
     * Retrieves a list of transactions by the customer profile ID.
     *
     * @param {string} profile_id - The ID of the profile.
     * @return {Promise<CardTransactionResponse[]>} A promise that resolves to an array of transactions.
     */
    listCardTransactionsByProfileId(profile_id: string): Promise<CardTransactionResponse[]> {
        return this.request(`${resource}`);
    }

    /**
     * Retrieves a list of transactions by the customer transaction batch ID.
     *
     * @param {string} batch_id - The ID of the batch.
     * @return {Promise<CardTransactionResponse[]>} A promise that resolves to an array of transactions.
     */
    listCardTransactionsByBatchId(batch_id: string): Promise<CardTransactionResponse[]> {
        return this.request(`${resource}`);
    }



}