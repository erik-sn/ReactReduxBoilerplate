import jsdom from 'jsdom';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import chaiImmutable from 'chai-immutable';

chai.use(dirtyChai);
chai.use(chaiImmutable);

function storageMock() {
  const storage = {};

  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return storage[key] || null;
    },
    removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

global.navigator = {
  userAgent: 'node.js',
};

window.localStorage = storageMock();
