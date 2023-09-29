import { Base } from "../base";
import { 
    CardTransactionQueryParams,
    CardTransactionQueryResponse, 
    AchTransactionQueryParams,
    AchTransactionQueryResponse
} from "./types";

const cardResource = "/payment/transactions";
const achResource = "/ach/transactions";


export class Transactions extends Base {

    /**
     * Fetches a transaction by its ID.
     *
     * @param {string} trxn_id - The ID of the transaction.
     * @return {Promise<CardTransactionQueryResponse>} A promise that resolves to the transaction.
     */
    fetchCardTransactionById(trxn_id: string): Promise<CardTransactionQueryResponse> {
        return this.request(`${cardResource}/${trxn_id}`);
    }

    /**
     * Retrieves a list of transactions.  The maximum number of transactions returned per API call is 250. If you require more than 250 use the 'limit' and 'offset' parameters
     *
     * @return {Promise<CardTransactionQueryResponse[]>} A promise that resolves to an array of transactions.
     */
    listCardTransactions(queryParams?: CardTransactionQueryParams): Promise<CardTransactionQueryResponse[]> {
        return this.request<CardTransactionQueryResponse[]>(`${cardResource}`, queryParams);
    }

    /**
     * Retrieves a list of transactions by the customer profile ID.
     *
     * @param {string} profile_id - The ID of the profile.
     * @return {Promise<CardTransactionQueryResponse[]>} A promise that resolves to an array of transactions.
     */
    listCardTransactionsByProfileId(profile_id: string): Promise<CardTransactionQueryResponse[]> {
        return this.request(`${cardResource}/${profile_id}`);
    }

    /**
     * Retrieves a list of transactions by the customer transaction batch ID.
     *
     * @param {string} batch_id - The ID of the batch.
     * @return {Promise<CardTransactionQueryResponse[]>} A promise that resolves to an array of transactions.
     */
    listCardTransactionsByBatchId(batch_id: string): Promise<CardTransactionQueryResponse[]> {
        return this.request(`${cardResource}`);
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
        return this.request<AchTransactionQueryResponse[]>(`${cardResource}`, queryParams);
    }



}