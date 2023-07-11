class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getLeftChildIndex(parentIndex) {
      return 2 * parentIndex + 1;
    }
  
    getRightChildIndex(parentIndex) {
      return 2 * parentIndex + 2;
    }
  
    getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    hasLeftChild(index) {
      return this.getLeftChildIndex(index) < this.heap.length;
    }
  
    hasRightChild(index) {
      return this.getRightChildIndex(index) < this.heap.length;
    }
  
    hasParent(index) {
      return this.getParentIndex(index) >= 0;
    }
  
    leftChild(index) {
      return this.heap[this.getLeftChildIndex(index)];
    }
  
    rightChild(index) {
      return this.heap[this.getRightChildIndex(index)];
    }
  
    parent(index) {
      return this.heap[this.getParentIndex(index)];
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    peek() {
      if (this.heap.length === 0) {
        throw new Error('Heap is empty.');
      }
      return this.heap[0];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
        const parentIndex = this.getParentIndex(index);
        this.swap(parentIndex, index);
        index = parentIndex;
      }
    }
  
    remove() {
      if (this.heap.length === 0) {
        throw new Error('Heap is empty.');
      }
      const minValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return minValue;
    }
  
    heapifyDown() {
      let index = 0;
      while (this.hasLeftChild(index)) {
        let smallerChildIndex = this.getLeftChildIndex(index);
        if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
          smallerChildIndex = this.getRightChildIndex(index);
        }
        if (this.heap[index] < this.heap[smallerChildIndex]) {
          break;
        } else {
          this.swap(index, smallerChildIndex);
        }
        index = smallerChildIndex;
      }
    }
  }

const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(7);
console.log(heap.peek()); // Output: 3
console.log(heap.remove()); // Output: 3
console.log(heap.peek()); // Output: 5
  