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
        if (index < 0 || this.length <= index) {
            return -1;
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
        if (index < 0 || this.length < index) {
            return false;
        }

        let node = new Node( data );

        if( index === 0 ) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
        } else if (index === this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            let current = this._head;
            let prev = null;
            let counter = 0;

            while(counter < index) {
                prev = current;
                current = current.next;
                counter++;
            }

            prev.next = node;
            node.prev = node;
        
            node.next = current;
            current.prev = node;
        }
            this.length++;
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
        
    }

    reverse() {

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
