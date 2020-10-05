// Given the head of a LinkedList with a cycle, find the length of the cycle.

class Node{
	constructor(value){
		this.value = value,
		this.next = null
	}
}

function lengthOfCycle(head){
	let fastPointer = head;
	let slowPointer = head;
	let length = 0;

	while(fastPointer !== null & fastPointer.next !== null){
		fastPointer = fastPointer.next.next;
		slowPointer =  slowPointer.next;

		if(fastPointer === slowPointer){
			let startPoint = slowPointer;
			slowPointer = slowPointer.next;
			length++;
			while(slowPointer !== startPoint){
				length++;
				slowPointer = slowPointer.next;
			}
			return length
		}
	}
	return -1;
}

let head = new Node(3);
head.next = new Node(4);
head.next.next = new Node(5);
head.next.next.next = new Node(6);
head.next.next.next.next = new Node(7);
head.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next = new Node(10);
head.next.next.next.next.next.next.next.next = new Node(11);head.next.next.next.next.next.next.next.next.next = head.next.next.next.next

lengthOfCycle(head);