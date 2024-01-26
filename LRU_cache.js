class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  get(key) {
    if (this.cache[key]) {
      const { value, node } = this.cache[key];
      this.updateNode(node);
      return value;
    }
    return -1; // If key doesn't exist in the cache
  }

//   LRU logic 
  put(key, value) {
    if (this.cache[key]) {
      const node = this.cache[key].node;
      node.value = value;
      this.updateNode(node);
    } else {
      if (this.size === this.capacity) {
        delete this.cache[this.tail.key];
        this.removeNode(this.tail);
      } else {
        this.size++;
      }
      const node = { key, value, prev: null, next: null };
      this.cache[key] = { value, node };
      this.addNode(node);
    }
  }

  updateNode(node) {
    if (node === this.head) {
      return;
    }

    this.removeNode(node);
    this.addNode(node);
  }

  addNode(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  removeNode(node) {
    if (node === this.head) {
      this.head = node.next;
    } else if (node === this.tail) {
      this.tail = node.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }
}

const cache = new LRUCache(2); // Capacity of 2

cache.put('key1', 'value1');
cache.put('key2', 'value2');

console.log(cache.get('key1')); // Output: value1
console.log(cache.get('key2')); // Output: value2

cache.put('key3', 'value3'); // Evicts key1 from the cache

console.log(cache.get('key1')); // Output: -1 (evicted)
console.log(cache.get('key2')); // Output: value2
console.log(cache.get('key3')); // Output: value3

