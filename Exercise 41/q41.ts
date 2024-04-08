//define the function to show magicians names

function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));

}

//function to make magicians great through .map() it wil modify array
function make_great(magicians: string[]){
  return  magicians.map(name => `the Great ${name}`);
}

//define an array of magicians names

let magician_names = ["harry poter", "zabia", "ali"]

//call make_great function to modify magicians names

let great_magicians = make_great(magician_names);

//call show_magicians that show modified list of magicians
show_magicians(great_magicians);
