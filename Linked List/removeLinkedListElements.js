//#203 - Remove Linked List Elements
// Remove all elements from a linked list of integers that have value val.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    while(head !== null && head.val === val){
        head = head.next
    } 
    let currentNode = head;  
    
    while(currentNode !== null && currentNode.next !== null){
        if(currentNode.next.val === val){
            currentNode.next = currentNode.next.next;        
        } else{
            currentNode = currentNode.next
        }       
    }
    
    return head;    
};

