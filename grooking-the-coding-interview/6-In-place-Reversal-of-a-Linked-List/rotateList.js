// ROTATE A LINKED LIST or # 61 - Rotate List (Leetcode)

//Given a linked list, rotate the list to the right by k places, where k is non-negative.

class Node {
	constructor(value){
		this.value = value,
		this.next = null
	}
}

function rotateLinkedList(head,k){
	if (!head) return head;
    let size = 1;
    let tail = head;
        
    while(tail.next){
        tail = tail.next;
        size++;
    }
    
    k = k%size;
    if(k === 0) return head;    
    let newTail = head;

    for(let count = size-k; count > 1; count--){
    	newTail = newTail.next;
    }
    
    let newHead = newTail.next;
    tail.next = head;
    newTail.next = null;
    
	 return newHead;  
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);