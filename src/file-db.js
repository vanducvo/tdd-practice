const path = require('path');

class FileDB {
  constructor(filepath, name){
    this._filepath = filepath;
    this._name = name;
  }

  getPathFile(){
    return path.join(this._filepath, this._name);
  }
}

module.exports = FileDB;