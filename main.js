let songList = [{song:"Highway",artist: "Grand Midnight Orchestra",duration: 3, genre: "j-pop"}, 
                {song:"Edamame",artist: "Rich Brian",duration: 3, genre: "hip-hop"}, 
                {song:"Lost",artist: "NF",duration: 4, genre: "hip-hop"}, 
                {song:"Luv Sic",artist: "Nujabes",duration: 2, genre: "hip-hop"}, 
                {song:"Last Call",artist: "Logic",duration: 7, genre: "hip-hop"}, 
                {song:"Psychosocial",artist: "Slipknot",duration: 4, genre: "metal"}, 
                {song:"Wake Me Up",artist: "Avicii",duration: 4, genre: "edm"}, 
                {song:"Kingslayer",artist: "Bring Me the Horizon",duration: 4, genre: "metal"}, 
                {song:"Flamingo",artist: "Token",duration: 3, genre: "hip-hop"}, 
                {song:"Takarajima",artist: "T-Squre",duration: 3, genre: "jazz"}, 
                {song:"4.AM",artist: "Logic",duration: 2, genre: "hip-hop"}, 
                {song:"Paid My Dues",artist: "NF",duration: 4, genre: "hip-hop"}, 
                {song:"Shiki No Uta",artist: "Nujabes",duration: 5, genre: "j-pop"}, 
                {song:"Crescent Moon Dance",artist: "Akito Matsuda",duration: 7, genre: "classical"}, 
]

beginning();

function beginning() {
    let question = prompt("Please input number from the option given : 1. artist 2. genre 3. Create playlist less than 1 hour 4. Exit");
    if(question == 1) {

        fArtist();

    } else if(question == 2) {
        
        fGenre();

    } else if(question == 3) {
       
        fDuration();

    } else if(question == 4) {
        
        console.log("See you again!!");
        return;

    } else if(question == 5) {
        
        fsong();

    }   else {
        console.log("Please input the correct number!!")
        return beginning();
}

function fArtist() {
    let inArtist = prompt("Please input the artist name")
    let filterArtist = songList.filter(function(obj) {
        return obj.artist === inArtist;
    } )

    console.log(...filterArtist);

    let again = confirm("Do you want to return to Main menu?")
    if (again == true) {
        return beginning();
    } else {
        console.log("See you again!!")
        return;
    }
}

function fGenre() {
    let inGenre = prompt("Please Input the Genre name")
    let filterGenre= songList.filter(function(obj) {
        return obj.genre === inGenre;
    }
    )
    console.log(...filterGenre);
    let again = confirm("Do you want to return to Main menu?")
    if (again == true) {
        return beginning();
    } else {
        console.log("See you again!!")
        return;
    }
} }

// function fDuration() {
//     let filterDuration= songList.filter(function(obj) {
//         return obj.duration <= 60;
//     }
//     )
//     console.log(...filterDuration);
//     let again = confirm("Apakah anda ingin kembali ke menu awal?")
//     if (again == true) {
//         return beginning();
//     } else {
//         console.log("Sampai berjumpa lagi")
//         return;
//     }
// } 

function fsong() {
    let inSong = prompt("Please input the song title")
    let findSong= songList.find(function(obj) {
        return obj.song === inSong;
    }
    )
    console.log(findSong);
    let again = confirm("Do you want to return to Main menu?")
    if (again == true) {
        return beginning();
    } else {
        console.log("See you again!!")
        return;
    }
} 


function fDuration() {
    let time = 60;
    let songDuration = 0;
    let playlist = [];

    
    let shufflePlaylist = songList.sort(() => Math.random() - 0.5);
        
    
    // console.log(shufflePlaylist);
    for(let i=0; i<shufflePlaylist.length; i++){
        songDuration += shufflePlaylist[i].duration;
        if(songDuration <= time){
            playlist[i] = ("Title : " +shufflePlaylist[i].song+ " Duration : "+shufflePlaylist[i].duration)
            console.log(playlist[i]);
            console.log("Playlist time: "+songDuration);
        }else{
            break;
        }
        
    }
    let again = confirm("Do you want to return to Main menu?")
    if (again == true) {
        return beginning();
    } else {
        console.log("See you again!!")
        return;
    }
        
        
    } 

    