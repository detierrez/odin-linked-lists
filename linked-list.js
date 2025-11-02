export default class LinkedList {
  head = null;

  get tail() {
    if (!this.head) return null;

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.pointTo(newNode);
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  get size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  at(index) {
    let node = this.head;
    let i = 0;
    while (node && i < index) {
      i++;
      node = node.next;
    }

    return node;
  }

  pop() {
    if (!this.head) return null;
    if (!this.head.next) {
      popped = this.head;
      this.head = null;
      return popped;
    }

    let prevNode = this.head;
    let lastNode = this.head.next;
    while (lastNode.next) {
      prevNode = lastNode;
      lastNode = lastNode.next;
    }

    prevNode.pointTo(null);
    return lastNode;
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }

    return false;
  }

  find(value) {
    let node = this.head;
    let i = 0;
    while (node && node.value !== value) {
      i++;
      node = node.next;
    }

    if (node) return i;

    return null;
  }

  toString() {
    if (!this.head) return null;
    return this.head.toString()
  }

  insertAt(value, index) {}

  removeAt(value, index) {}
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  pointTo(node) {
    this.next = node;
  }

  toString() {
    const thisString = `( ${this.value} ) ->`;
    const nextString = this.next ? this.next.toString() : null;
    return thisString + " " + nextString;
  }
}
