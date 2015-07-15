class AppContext {

  constructor() {
      this._isClient = false;
  }

  GetIsClient() {
    return this._isClient;
  }

  SetIsClient(value) {
    this._isClient = value;
  }

}

var context = new AppContext();

module.exports = context;
