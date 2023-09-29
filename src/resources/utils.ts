

/**
 * Generates a random string of the specified length.
 *
 * @param {number} length - The length of the random string.
 * @return {string} - The generated random string.
 */
export function genRandomString  (length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}