// define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwivh with the following itms: \n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow enjoy sandwich");
}
// call the function 3 times with 3 different number of arguments 
makeSandwich("chicken", "cheese", "mayo", "egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "butter", "mayo", "egg", "cheese", "chicken", "lettuce", "tomato");
