// REVERSE A LINKED LIST
/* Given the head of a Singly LinkedList, reverse the LinkedList.
 Write a function to return the new head of the reversed LinkedList.*/

class Node {
	constructor(value){
		this.value = value,
		this.next = null
	}
}

function reverseLinkedList(head){
	let prevNode = null;
	let currentNode = head;

	while(currentNode){
		let nextNode = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		currentNode = nextNode;
	}

	return prevNode;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);