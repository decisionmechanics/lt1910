//reate an empty string array, called songs
let songs: string[] = [];
//Push three of your favorite song titles onto it
songs.push("Song 1");
songs.push("Song 2");
songs.push("Song 3");   
//Pop them off one at a time and display them
while(songs.length > 0) { 
    console.log("songs now:" + songs);
    let song = songs.pop();
    console.log("removed:" + song);  //reverse order
   
}

console.log("songs now:" + songs);  
//empty array - pop removes items