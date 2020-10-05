// START OF LINKED LIST CYCLE or #142 Linked List Cycle II (Leetcode)
// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

class Node{
	constructor(value){
		this.value = value,
		this.next = null
	}
}

function startOfLinkedList(head){
	let slowPointer =  head;
	let fastPointer =  head;

	while(fastPointer !== null && fastPointer.next !== null){
		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next.next;

		if(slowPointer === fastPointer){
			let start = head;
			let intersection = slowPointer;

			while(start !== intersection){
				start = start.next;
				intersection = intersection.next;
			}
			return intersection;
		}
	}
	return null;
}

let head = new Node(3);
head.next = new Node(4);
head.next.next = new Node(5);
head.next.next.next = new Node(6);
head.next.next.next.next = new Node(7);
head.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next = new Node(10);
head.next.next.next.next.next.next.next.next = new Node(11);head.next.next.next.next.next.next.next.next.next = head.next.next.next.next.next;

startOfLinkedList(head);