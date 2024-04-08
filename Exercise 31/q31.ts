// Array of current users

let current_users = [ "areesh", "areesha", "hamza", "zabia", "aun"]

// Array of new users

let new_users = ["zabia", "kashaf", "asiya", "fatima", "ahmed"]

// loop through new_users to check for usernames avaibility

new_users.forEach(new_one_user => {

    //making a condition for username already exist and save in our_condition variable

    let our_condition = current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())
    
   // print different messages using if-else statements

    if(our_condition){
        console.log(`sorry ${new_one_user} is already taken!`)

    }else {
        console.log(`this username ${new_one_user} is availabe`)
    }

})