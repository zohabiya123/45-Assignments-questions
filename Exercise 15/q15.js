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
