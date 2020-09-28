// # 876 - Middle of the Linked List
/* Given a non-empty, singly linked list with head node head, return a middle node of linked list.
If there are two middle nodes, return the second middle node.*/

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
var middleNode = function(head) {
    let currentNode = head;
    let count = 0;
    
    while(currentNode){
        count++;
        currentNode = currentNode.next;
    }
    
    let mid = Math.floor(count/2);
    count = 0;    
    while(count < mid){
        head = head.next;
        count++;
    }
    return head;
};

/*
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};*/