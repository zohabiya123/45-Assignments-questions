"use strict";
let personName = "zohabiya";
//lower case
console.log(personName.toLowerCase());
//upper case
console.log(personName.toUpperCase());
//tittle case 
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
