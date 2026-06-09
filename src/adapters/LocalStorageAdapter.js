import { StoragePort } from '../ports/StoragePort.js';

export class LocalStorageAdapter extends StoragePort {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}