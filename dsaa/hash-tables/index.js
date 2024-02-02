class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);

    return this;
  }

  get(key) {
    let index = this._hash(key);

    if (!this.dataMap[index]) {
      return undefined;
    }

    return this.dataMap[index].find((a) => a[0] === key)[1];
  }

  keys() {
    let allKeys = [];

    this.dataMap.forEach((valueArray) => {
      if (valueArray) {
        valueArray.forEach((a) => {
          allKeys.push(a[0]);
        });
      }
    });

    return allKeys;
  }
}

const ht = new HashTable();

ht.set('bolts', 1400);
ht.set('screws', 1400);

console.log(ht.keys());
