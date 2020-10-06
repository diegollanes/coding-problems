// HAPPY NUMBER
/* Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of 
all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. 
Instead, they will be stuck in a cycle of numbers which does not include ‘1’*/


function isHappyNumber(n){
	let seen = {};   
    while(n !== 1){
        let current = n;
        let sum = 0;
        
        while(current !== 0){
            sum = sum + ((current%10) * (current%10));
            current = Math.floor(current/10);
        }
        if(sum in seen) return false;
        
        seen[sum] = 1;
        n = sum;
    }
    return true;
}