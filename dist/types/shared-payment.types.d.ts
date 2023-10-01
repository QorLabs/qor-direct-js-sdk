export declare type PaymentShippingObject = {
    amount: string;
    postal_code: string;
    country_code: string;
};
export declare type PaymentItemsObject = {
    total_amount: string;
    name: string;
    description?: string;
    unit_price: string;
    units_sold: string;
    unit_measurement: string;
    ucc: string;
    upc: string;
};
export declare type PaymentDiscountObject = {
    amount: string;
    percent: number;
};
export declare type PaymentCustomerObject = {
    customer_id: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    website?: string;
    address_street_1?: string;
    address_street_2?: string;
    address_city?: string;
    address_state_code?: string;
    address_postal_code?: string;
    address_country?: string;
};
