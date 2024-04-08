// define the make_album finction

function make_album(artist_name: string, album_title: string, tracks?: number){
  let album: {artist: string, title: string, tracks?: number} = {
      artist: artist_name,
      title: album_title
  };

  if (tracks !== undefined){
    album.tracks = tracks;

  }
  return album;
}

// calling three functions and creating 3 variables with differeny values 

let album1 = make_album("Zabia", "album title 1");

let album2 = make_album("areesha", "album title 2");

// caling a make_album function with third parameter

let album3 = make_album("areesh", "album title 3" , 10);

// print values of our object created my function 

console.log(album1);
console.log(album2);
console.log(album3);
