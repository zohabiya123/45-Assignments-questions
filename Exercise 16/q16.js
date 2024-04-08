"use strict";
// creating a guest list arry
let guestList = ["ayesha", "sara", "tara", "hira"];
// making variable for those who cant come
let notpresent = guestList[0];
// printing the name of guest cant come
console.log(notpresent, "Nahi Ahh Saktay Hein");
//add or remove values from guest list array
guestList.splice(0, 1, "Aun");
// message print for array
console.log("Good New ! We have Found a Bigger Tableb For Dinner.");
// adding a new value at starting index of array
guestList.unshift("Sameer");
// adding a new value at ending index of array 
guestList.push("Ali");
// Get a middle index of our guest list array 
let middleIndex = (guestlist.length / 2);
// adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
//printing message of updated list
console.log("updated list of Our guests");
// sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));
//inform that only two guests can be invited for dinner 
console.log("Unfortunately, the new dinner table wont arrive on yime, so i can only invite two guests to dinner with me");
// using while-loop to remove guests from the array until only two names remains
while (guestList.lengtht > 2) {
    let removeguest = guestList.pop();
    console.log(`sorry, ${removeguest} I cant invite you to dinner`);
}
// sendig a invitations to the last two guests on the list
console.log("invitation to the last two guests");
guestList.forEach(lasttwo => console.log(`unlucky ${lasttwo}, you are still invited to dinner`));
//removing last two guest from the list
guestList.pop();
guestlist.pop();
console.log("empty List", guestlist);
