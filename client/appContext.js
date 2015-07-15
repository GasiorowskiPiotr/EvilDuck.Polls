class AppContext {

  constructor() {
      this._isClient = false;
  }


  IsClient() {
    return this._isClient;
  }

  IsClient(value) {
    this._isClient = value;
  }

}

var context = new AppContext();

module.exports = context;
