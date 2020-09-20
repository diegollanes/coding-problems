// #206 - Reverse Linked List
// Instructions: Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    let prevNode = null;
    let currentNode = head;
    let nextNode = null;
    
    while(currentNode !== null){
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;        
    }
    head = prevNode;
    return head
};