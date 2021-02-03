class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data, null);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next);
      {
        current.next = newNode;
      }
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return null;
    }

    const newNode = new Node(data);
    let current = this.head;
    let previous;

    if (index === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      newNode.nex = current;
      previous.next = newNode;
    }
    this.size++;
  }
  print() {
    if (!this.size) {
      return null;
    }
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data += " -> ";
      current = current.next;
    }
    result += "X";
    return result;
  }

  removeData(data) {
    let current = this.head;
    let previous = null;
    while (current != null) {
      if (current.data === data) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }
    return null;
  }

  removeFrom() {
    if (index < 0 || index > this.size) {
      return null;
    }

    let current = this.head;
    let previous = null;

    if (index === 0) {
      this.head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }
}

const linkedList = new LinkedList();
linkedList.add(12);
linkedList.insertAt(99, 1);
linkedList.add(37);
linkedList.removeData(12);
console.log(linkedList.print());
