type Nullable<T> = T | null;

class LinkedListNode {
    constructor(private _value: unknown, private _next: Nullable<LinkedListNode>) {}

    get value() {
        return this._value;
    }

    get next() {
        return this._next;
    }

    set next(node: Nullable<LinkedListNode>) {
        this._next = node;
    }
}

class LinkedList {
    private _head: Nullable<LinkedListNode>;
    private _tail: Nullable<LinkedListNode>;
    private _length: number;

    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    // Push
    push(node: LinkedListNode) {
        if (!this._head) {
            this._head = node;
            this._tail = node;

            this._length++;

            return node;
        }

        if (this._tail) {
            this._tail.next = node;
            this._tail = node;

            this._length++;

            return node;
        }

        return null;
    }

    // Pop
    pop() {
        let current = this._head;

        if (!current) {
            return null;
        }

        if (this._length === 1) {
            this._head = null;
            this._tail = null;

            this._length--;

            return null;
        }

        if (this._length === 2) {
            this._head = current;
            this._head.next = null;
            this._tail = current;

            this._length--;

            return current;
        }

        while (current.next?.next) {
            current = current?.next;
        }

        current.next = null;
        this._tail = current;

        this._length--;

        return current;
    }
    // unshift - Create new Node and add this to the start
    unshift(value: unknown) {
        const node = new LinkedListNode(value, this._head);
        this._head = node;

        if (!this._tail) {
            this._tail = node;
        }

        this._length++;

        return node;
    }

    // shift - Remove first and return it
    shift() {
        if (!this._head) {
            return null;
        }

        const removed = this._head;
        this._head = this._head.next;

        this._length--;

        return removed;
    }

    // get
    get(index: number) {
        if (index < 0 && index > this.length) {
            return null;
        }

        if (index === 0) {
            return this._head;
        }

        if (index === this.length - 1) {
            return this._tail;
        }

        let current = this._head?.next;
        let i = 1;
        while (current && index !== i) {
            current = current.next;
            i++;
        }

        return current;
    }

    // set

    get length() {
        return this._length;
    }

    print() {
        if (!this._head) {
            return console.log('----Empty----');
        }

        let current: Nullable<LinkedListNode> = this._head;
        let result = '';
        while (current) {
            result += `${current?.value}${current.next ? '--->' : ''}`;
            current = current.next;
        }

        console.log(result, `Head = ${this._head?.value}; Tail = ${this._tail?.value}; Length = ${this.length}`);
    }
}

const linkedList = new LinkedList();
linkedList.push(new LinkedListNode(1, null));
linkedList.push(new LinkedListNode(2, null));
linkedList.print();
linkedList.push(new LinkedListNode(3, null));
linkedList.print();
linkedList.pop();
linkedList.pop();
linkedList.pop();
linkedList.print();
linkedList.push(new LinkedListNode(4, null));
linkedList.push(new LinkedListNode(5, null));
linkedList.print();
linkedList.unshift(10);
linkedList.unshift(11);
linkedList.print();
console.log(linkedList.get(1)?.value, 1);
console.log(linkedList.get(2)?.value, 2);
linkedList.shift();
linkedList.print();

console.log(linkedList.get(1)?.value, 1);
