

/**
 * Generates a random string of the specified length.
 *
 * @param {number} length - The length of the random string.
 * @return {string} - The generated random string.
 */
export function genRandomString  (length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}