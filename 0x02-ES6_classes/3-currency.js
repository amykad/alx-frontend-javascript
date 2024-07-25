class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * @param {String} code
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a String');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }
`
