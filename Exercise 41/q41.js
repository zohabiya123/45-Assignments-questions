//define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it wil modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
//define an array of magicians names
var magician_names = ["harry poter", "zabia", "ali"];
//call make_great function to modify magicians names
var great_magicians = make_great(magician_names);
//call show_magicians that show modified list of magicians
show_magicians(great_magicians);
