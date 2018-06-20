const mem = require('./memory');
const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
}

function main() {

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  // arr.push(3);
  // console.log(arr);

  // What is the length, capacity and memory address of your array?
  // length is 1, the capacity of the array is 3, memory address of array is 0

  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);
  // console.log(arr);

  // What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
  // The length of the new array is 6, the capacity is set to 12, and the memory address is 3.
  // With each push the length was increased by one and once length was equal to capactiy _resize was run so 3 + 1 * 3 set the new capacity to 12. The pointer is moved to 3 because the arrays
  // length went past the capacity, so the array needed to create a new block of 12 spaces.

  // arr.pop();
  // arr.pop();
  // arr.pop();
  // console.log(arr);

  // What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code.
  // Array { length: 3, _capacity: 12, ptr: 3 }
  // length is cut down to 3 since pop removes the last element of the array. Capacity and ptr dont change since the length doesnt surpass the capacity.

  // console.log(arr.get(0))
  arr.push('tauhida');
  console.log(arr);
  console.log(arr.get(0))

  // Print this one item that you just added. What is the result? Can you explain your result?
  // memory is set to Float64Array so only numbers can be inputted into it.

  // What is the purpose of the _resize() function in your Array class?
  // The resize function copies the current array and moves it over to the next available slot of memory to n + 1 * 3, n being the length of the array. This makes it so that the array doesnt have
  // to be resized everytime another value is pushed into the array.
}
main();


