// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;

        while(node) {
            count += 1;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while(node) {
            if (node.next === null) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (this.size() === 1) {
            this.head = null;
        }

        let node = this.head;
        let prevNode = null;
        while(node) {
            if (node.next === null) {
                prevNode.next = null;
                return;
            }
            prevNode = node;
            node = node.next;
        }
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        const last = this.getLast();
        last.next = new Node(data);
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while(node) {
            if(index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }
}

module.exports = { Node, LinkedList };
