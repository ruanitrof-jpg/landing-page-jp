export class StoragePort {
  save(key, value) {
    throw new Error("O método 'save' precisa ser implementado pelo adapter.");
  }

  load(key) {
    throw new Error("O método 'load' precisa ser implementado pelo adapter.");
  }
}