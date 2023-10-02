import { Base } from "../base";
import { CreateCardToken, CreateTokenResponse, FetchCardTokenParams, FetchCardTokenByIdResponse, FetchCardTokenByCustomerResponse, UpdateCardToken, UpdateCardTokenResponse, RollbackCardToken, RollbackCardTokenResponse, RotateCardToken, RotateCardTokenResponse, DeleteCardToken, DeleteCardTokenResponse, CreateAchToken, FetchAchTokenParams, FetchAchTokenByCustomerResponse, FetchAchTokenByIdResponse } from "../types/payment-tokens.types";
export declare class PaymentTokens extends Base {
    processCreateCardToken(req: CreateCardToken): Promise<CreateTokenResponse>;
    processFetchTokenById(req: FetchCardTokenParams): Promise<FetchCardTokenByIdResponse>;
    processFetchTokenByCustomerId(req: FetchCardTokenParams): Promise<FetchCardTokenByCustomerResponse>;
    processUpdateToken(req: UpdateCardToken): Promise<UpdateCardTokenResponse>;
    processRotateToken(req: RotateCardToken): Promise<RotateCardTokenResponse>;
    processRollbackToken(req: RollbackCardToken): Promise<RollbackCardTokenResponse>;
    processDeleteToken(req: DeleteCardToken): Promise<DeleteCardTokenResponse>;
    processCreateAchToken(req: CreateAchToken): Promise<CreateTokenResponse>;
    processFetchAchTokenById(req: FetchAchTokenParams): Promise<FetchAchTokenByIdResponse>;
    processFetchAchTokenByCustomerId(req: FetchCardTokenParams): Promise<FetchAchTokenByCustomerResponse>;
}
