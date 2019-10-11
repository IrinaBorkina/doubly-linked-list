const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const node = new Node(data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index < 0 || this.length === 0|| this.length < index) {
            return false;
        }

        let current = this._head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }
        return current.data;
    }

    insertAt(index, data) {
        if (index < 0 || this.length === 0|| this.length < index) {
            return false;
        }

        let node = new Node(data);

        if (index === 0) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        } else {
            let current = this._head;
            let prev = null;
            let count = 0;

            while(count < index) {
                prev = current;
                current = current.next;
                count++;
            }

            prev.next = node;
            node.prev = node;
        
            node.next = current;
            current.prev = node;
        }
        this.length++;
        return this;
    }
    

    isEmpty() {
        if (this.length == 0) {
			return true;
		}
		else {
			return false;
		}
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let current = this._head;

        while (index--) {
            current = current.next;
        }

        if (current.prev) {
            current.prev.next = current.next;
        }

        if (current.next) {
            current.next.prev = current.prev;
        }

        return this;
    }

    reverse() {
        this._tail = this._head;

        while (this._head !== null) {
            let temp = this._head.prev;

            this._head.prev = this._head.next;
            this._head.next = temp;

            if (this._head.prev !== null) {
                this._head = this._head.prev;
            } else {
                break;
            }
        }

        return this;
    }

    indexOf(data) {
        let element = this._head;
        let index = 0;

		while (element) {			
			if (element.data === data) {
                return index;
            }
            
            element = element.next;
            index++;
        }
        
		return -1;
    }
}

module.exports = LinkedList;
