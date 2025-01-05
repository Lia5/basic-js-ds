const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  removeValue(k) {
    if (!this.head) {
      return null;
    }

    while (this.head && this.head.value === k) {
      this.head = this.head.next;
    }

    let current = this.head;
    while (current && current.next) {
      if (current.next.value === k) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    return this.head;
  }
}

function removeKFromList(l, k) {
  const list = new LinkedList(l);
  return list.removeValue(k);
}

module.exports = {
  removeKFromList
};
