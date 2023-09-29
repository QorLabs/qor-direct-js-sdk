


/**
 * Generates a random string with the specified length.
 *
 * @param {number} length - The length of the random string to generate.
 */
export async function genRandomString(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


/**
 * Retrieves the IP address using the ipify API.
 *
 * @return {Promise<string>} The IP address.
 */
export async function getIPAddress(): Promise<string> {
    return fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        console.log('IP Address:', ipAddress);
        return ipAddress; // Return the IP address
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
}

/**
 * Validates the expiration date of a credit card.
 *
 * @param {number} month - The month of the expiration date.
 * @param {number} year - The year of the expiration date. (Cannot be more than 10 years in the future)
 * @return {boolean} Returns true if the expiration date is valid, otherwise returns false.
 */
/**
 * Validates the expiration date of a credit card.
 *
 * @param {number} month - The month of the expiration date.
 * @param {number} year - The year of the expiration date. (Cannot be more than 10 years in the future)
 * @return {boolean} Returns true if the expiration date is valid, otherwise returns false.
 */
export function validateCreditCardExpiration(month: number, year: number): boolean {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    
    const maxAllowedYear = currentYear + 10;
    
    if (year > maxAllowedYear) {
        return false;
    }
    
    if (year > currentYear || (year === currentYear && month >= currentMonth)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Validates a credit card number.
 *
 * @param {string} cardNumber - The credit card number to validate.
 * @return {boolean} Returns true if the credit card number is valid, otherwise returns false.
 */
export function validateCreditCardNumber(cardNumber: string): boolean {
    const sanitizedCardNumber = cardNumber.replace(/[\s-]/g, '');

    const isNumeric = /^\d+$/.test(sanitizedCardNumber);
    const hasValidLength = sanitizedCardNumber.length >= 13 && sanitizedCardNumber.length <= 19;

    if (!isNumeric || !hasValidLength) {
        return false;
    }

    let sum = 0;
    let double = false;
    for (let i = sanitizedCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitizedCardNumber.charAt(i));

        if (double) {
            digit *= 2;
            digit = digit > 9 ? digit - 9 : digit;
        }

        sum += digit;
        double = !double;
    }

    return sum % 10 === 0;
}

/**
 * Determines the credit card brand based on the credit card number.
 *
 * @param {string} cardNumber - The credit card number.
 * @return {string} The credit card brand (e.g., "Visa", "Mastercard", "American Express").
 */
export function getCardBrand(cardNumber: string): string {
    const sanitizedCardNumber = cardNumber.replace(/[\s-]/g, '');
    let brand = '';

    if (/^4/.test(sanitizedCardNumber)) {
        brand = 'Visa';
    } else if (/^5[1-5]/.test(sanitizedCardNumber)) {
        brand = 'Mastercard';
    } else if (/^3[47]/.test(sanitizedCardNumber)) {
        brand = 'American Express';
    } else if (/^6(?:011|5)/.test(sanitizedCardNumber)) {
        brand = 'Discover';
    } else if (/^(?:2131|1800|35\d{3})/.test(sanitizedCardNumber)) {
        brand = 'JCB';
    } else if (/^3(?:0[0-5]|[68])/.test(sanitizedCardNumber)) {
        brand = 'Diners Club';
    } else if (/^(?:5[0678]|6304|6390|67\d{2})/.test(sanitizedCardNumber)) {
        brand = 'Maestro';
    } else {
        brand = 'Unknown';
    }

    return brand;
}

