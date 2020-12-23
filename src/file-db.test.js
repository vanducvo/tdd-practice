const fs = require('fs');
const FileDB = require('./file-db');
const path = require('path');

describe('File DB', () => {

  test('can constuctor with file path', () => {;
    const dbPath = getDBPathFromEnviroment();
    const name = 'mydb';

    const fileDB = new FileDB(dbPath, name);
    
    expect(fileDB).toBeInstanceOf(FileDB);
    expectObjectContainValue(fileDB, dbPath);
    expectObjectContainValue(fileDB, name);
  });

  test('can get path file', () => {
    const dbPath = getDBPathFromEnviroment();
    const name = 'mydb';

    const fileDB = new FileDB(dbPath, name);


    expect(fileDB.getPathFile()).toEqual(path.join(dbPath, name));
  });
});

function expectObjectContainValue(fileDB, dbPath) {
  expect(Object.values(fileDB)).toEqual(
    expect.arrayContaining([dbPath])
  );
}

function getDBPathFromEnviroment() {
  return process.env.DB_PATH;
}
