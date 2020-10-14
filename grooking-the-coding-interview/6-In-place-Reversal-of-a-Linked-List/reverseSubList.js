/* REVERSE A SUB-LIST or #92 - Reverse Linked List II (Leetcode)
Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’. */

class Node {
	constructor(value){
		this.value = value,
		this.next = null
	}
}

function reverseSubList(head,m,n){
    if (head === null) return null;

    let prevNode = null;  
	let currentNode = head;

	while(m > 1){
        prevNode = currentNode;
		currentNode =  currentNode.next;
		m--;
        n--;
	}

	let firstHalf = prevNode;
	let firstMiddle = currentNode;

	while(n > 0){
		let nextNode = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		currentNode = nextNode;
        n--;
	}

    if(firstHalf !== null) firstHalf.next = prevNode;
    else head = prevNode;

	firstMiddle.next = currentNode;
	return head; 
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);