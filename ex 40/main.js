// Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling Function three times with different values and variable
var album1 = make_album("Nabeel", "Album title 1");
// Calling a make_albu function with third parameter
var album2 = make_album("Ummat", "Album title 2", 10);
var album3 = make_album("Adil", "Album title 3", 15);
// Printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
