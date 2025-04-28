/**
 *@typedef {(Object.<string|JSONLike>|JSONLike[]|string|number|boolean|null)}JSONLike
 */

/**
 * @typedef {Object} DefaultConfigType
 * @property {Object.<string|string>} headers
 * @property {(JSONLike | ArrayBuffer)= } [body]
 * @property {('json'|'text'|'document'|'buffer')=}   [contentType]
 */
/**
 * @typedef {{
 * headers?:{[key:string]:string}
 * body?:(JSONLike|ArrayBuffer)
 * contentType?:('json'|'text'|'document'|'buffer')
 * }} Config2
 * */

/**
 * @type {DefaultConfigType}
 */
const defaultConfig = {
  headers: { Authorization: myToken },
}
/**
 * @typedef {{
 * json: ()=>Promise<Object>,
 * text: function ():Promise<string>,
 * document: function ():Promise<document>,
 * buffer:function ():Promise<ArrayBuffer>
 * }} ReturnType
 */

/**
 * @param {string} url
 * @param {Config1} params
 * @returns {ReturnType}
 */
function post(url, params) {}

/**
 * @param {string} url
 * @param {Config1} params
 * @returns {ReturnType}
 */

function put(url, params) {}
