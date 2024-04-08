"use strict";
//making an array original order
let countriesTovisit = ["Chaina", "Denmark", "Brazil", "Agentina"];
console.log("original Order:", countriesTovisit);
//print an array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesTovisit].sort());
//show that array is still in its order
console.log("still in original order:", countriesTovisit);
//print an array in reverse order without modifying the actual array list
console.log("reverse orde;", [...countriesTovisit].reverse());
//show that array is still in its order
console.log("still in original order:", countriesTovisit);
//change the original array
console.log("original Arry Reversed:", countriesTovisit.reverse());
//back its original
console.log(" Back to original order:", countriesTovisit.reverse());
//print the array to show its order has been change in alphabetical order now
console.log("sorted in alphabetical order:", countriesTovisit.sort());
//change the original array again in reverse order again
console.log("original Arry Reversed again:", countriesTovisit.reverse());
