// #121 - Best Time to Buy and Sell Stock
/* Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an 
algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let min = prices[0];
    let answer = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < min){
            min = prices[i];
        } else{
            if(prices[i] - min > answer){
                answer = prices[i] - min;
            }
        }
    }
    return answer;
};