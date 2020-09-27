/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

 let getDecimalValue = function(head) {
    let result = 0
    while (head) {
        result = result * 2 + head.val
        head = head.next
    }
    return result
};

/*
var getDecimalValue = function(head) {
    let current = head;
    let count = 0;
    let result = 0;
    
    while(current){
        current =  current.next;
        count++;
    }
    count--;
    
    current = head;
    
    while(current){
        result = result + (current.val * Math.pow(2,count));
        count--;
        current = current.next;
    }
    
    return result;
}; */