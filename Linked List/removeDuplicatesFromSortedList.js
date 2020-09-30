// #83 - Remove Duplicates from Sorted List
// Given a sorted linked list, delete all duplicates such that each element appear only once.

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
var deleteDuplicates = function(head) {
    let currentNode = head;

    while(currentNode !== null && currentNode.next !== null){
        if(currentNode.val === currentNode.next.val){
            currentNode.next = currentNode.next.next;
        } else{
           currentNode = currentNode.next;
        }
    }  
    return head;  
};