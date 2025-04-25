/**
 * @typedef {Object} DefaultConfigType
 * @property {Object.<string|string>} headers
 * @property {string | json | ArrayBuffer } [body]
 * @property {'json'|'text'|'document'|'buffer'}   [contentType]
 */
/**
 * @type {DefaultConfigType}
 * */
const defaultConfig = {
  headers: { Authorization: myToken },
}
/**
 * @typedef {Object} ResponseData
 * @property {Object} json
 * @property {string} text
 * @property {Document} document
 * @property {ArrayBuffer} buffer
 */

/**
 * @function post
 * @param {string} url
 * @param {DefaultConfigType} params
 * @returns {Promise<ResponseData>}
 */
function post(url, params) {}

/**
 * @function put
 * @param {string} url
 * @param {DefaultConfigType} params
 * @returns {Promise<ResponseData>}
 */

function put(url, params) {}
