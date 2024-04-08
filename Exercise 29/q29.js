"use strict";
// cearting a array
let userNames = ["areesh", "areesha", "hamza", "zabia"];
// using forEach loop on Array
userNames.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status reports?`);
    }
    else {
        console.log(`hello ${oneUser}, thank you for logging in again.`);
    }
});
