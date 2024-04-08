"use strict";
let userNames = ["areesh", "areesha", "hamza", "zabia"];
if (userNames.length === 0) {
    console.log("your Array in empty we need to find some users!");
}
else {
    //using forEach loop on Array
    userNames.forEach(oneUser => {
        if (oneUser === " zabia") {
            console.log(`hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`hello ${oneUser}, thank you for logging in again.`);
        }
    });
}
