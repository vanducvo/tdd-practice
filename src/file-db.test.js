const fs = require('fs');
const FileDB = require('./file-db');

describe('File DB', () => {

  test('can constuctor with file path', () => {;
    const dbPath = getDBPathFromEnviroment();
    
    const fileDB = new FileDB(dbPath);
    
    expect(fileDB).toBeInstanceOf(FileDB);
    expect(Object.values(fileDB)).toEqual(
      expect.arrayContaining([dbPath])
    );
  });
});

function getDBPathFromEnviroment() {
  return process.env.DB_PATH;
}
