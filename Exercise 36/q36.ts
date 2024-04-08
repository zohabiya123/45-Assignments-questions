// making a function 

function make_shirt ( size: string = "Large", printmessage: string = "i love TypeScript"){
    console.log(`creating a ${size} shirt with the ${printmessage} prints on shirt`)

}

// calling a function with by-default values

make_shirt();

// calling a function now with medium size and default message

make_shirt("meduim")

// calling a function now with small size and  also different print message

make_shirt("small, i love JavaScript")