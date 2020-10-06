// PALINDROME LINKED LIST or #234 Palindrome Linked List (Leetcode)
/* Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. 
The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

Example 1:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

Example 2:
Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false */

function palindromeLinkedList(head){
	let fastPointer = head;
	let slowPointer = head;

	while(fastPointer !== null && fastPointer.next !== null){
		slowPointer =  slowPointer.next;
		fastPointer = fastPointer.next.next;
	}

	if(fastPointer !== null){
		slowPointer = slowPointer.next;
	}

	fastPointer = head;
	let previous = null;

	while(slowPointer){
		let nextNode = slowPointer.next;
		slowPointer.next = previous;
		previous = slowPointer;
		slowPointer = nextNode;
	}

	slowPointer = previous;	

	while(slowPointer !== null){
		if(slowPointer.val !== fastPointer.val){
			return false;
		}
		slowPointer =  slowPointer.next;
		fastPointer =  fastPointer.next;
	}
	return true; 
}