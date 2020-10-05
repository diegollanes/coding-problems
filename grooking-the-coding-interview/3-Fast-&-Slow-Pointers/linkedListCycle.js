/* LINKED LIST CYCLE 
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.*/

class Node{
	constructor(value){
		this.value = value,
		this.next = null
	}
}

function linkedListCycle(head){
	let  fastPointer = head;
	let slowPointer = head;

	while(fastPointer !== null && fastPointer.next !== null){
		fastPointer = fastPointer.next.next;
		slowPointer = slowPointer.next;
		if(fastPointer === slowPointer) return true; 
	}
	return false;
}

let head = new Node(10);
head.next = new Node(5);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
//head.next.next.next.next.next = head.next.next.next.next;

linkedListCycle(head);