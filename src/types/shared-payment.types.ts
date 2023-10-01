/** Payment credit card track object. */
export declare type PaymentShippingObject = {
    //** Total shipping amount.  Use numbers for dollar amount and up to 2 decimal places for cents.  Example $100.00 could be 100 or 100.00 */
    amount: string;
    /** Shipping destnation postal code  */
    postal_code: string;
    /** Shipping destnation street 1 address */
    country_code: string;
  };
  /** Payment sale order items object. */
  export declare type PaymentItemsObject = {
    /** The total amount of the item which should equal (((unit_price * units_sold) + taxes + fees) - discounts) */
    total_amount: string;
    //** Item name */
    name: string;
    /** Item description  */
    description?: string;
    /** Item price per unit */
    unit_price: string;
    /** Item units sold */
    units_sold: string;
    /** Item unit of measurement */
    unit_measurement: string;
    /** Item Universal Commercial Code (UCC) value */
    ucc: string;
    /** Item Universal Product Code (UPC) value */
    upc: string;
  };
  export declare type PaymentDiscountObject = {
    /** Fixed amount for discount.  Must not be more than the payment **amount**.  Value will be overriden if discount **percent** value is provided. */
    amount: string;
    /** Percent of payment **amount** to apply to discount amount.  Use whole number percentage with up to 2 decimal points.  For example if percent discount is 5.55% input 5.55.  */
    percent: number;
  };
  /** Payment customer object */
  export declare type PaymentCustomerObject = {
    /** Customer first name */
    first_name?: string;
    /** Customer last name */
    last_name?: string;
    /** Customer email address.  Required if **send_receipt** or **store_token** is set to `true` */
    email?: string;
    /** Customer phone number */
    phone?: string;
    /** Customer website */
    website?: string;
  };