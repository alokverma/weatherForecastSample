export default class MockStorage {
    constructor(cache = {}) {
      this.storageCache = cache;
    }
  
    storeData = jest.fn((key, value) => {
      return new Promise((resolve, reject) => {
        return (typeof key !== 'string' || typeof value !== 'string')
          ? reject(new Error('key and value must be string'))
          : resolve(this.storageCache[key] = value);
      });
    });
  
    getData = jest.fn((key) => {
      return new Promise((resolve) => {
        return this.storageCache.hasOwnProperty(key)
          ? resolve(this.storageCache[key])
          : resolve(null);
      });
    });
  }