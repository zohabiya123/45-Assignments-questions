// define a function with a rest parameter that accept items arguments representing our sandwich

function makeSandwich(...items: string[]){
    console.log("making a sandwivh with the following itms: \n");

    items.forEach(singleItem => console.log("-" + singleItem))
    
    console.log("\nNow enjoy sandwich");

}

// call the function 3 times with 3 different number of arguments 

makeSandwich("chicken", "cheese", "mayo", "egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "butter", "mayo", "egg", "cheese", "chicken", "lettuce", "tomato", )