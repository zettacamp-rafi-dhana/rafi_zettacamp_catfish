let songList = [{song:"Highway",artist: "Grand Midnight Orchestra",duration: 3, genre: "j-pop"}, 
                {song:"Edamame",artist: "Rich Brian",duration: 3, genre: "hip-hop"}, 
                {song:"Lost",artist: "NF",duration: 4, genre: "hip-hop"}, 
                {song:"Luv Sic",artist: "Nujabes",duration: 2, genre: "hip-hop"}, 
                {song:"Last Call",artist: "Logic",duration: 34, genre: "hip-hop"}, 
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
    let question = prompt("Silahkan pilih pencarian berdasarkan angka dari pilihan yang anda mau berikut : 1.artist 2.genre 3.duration less than 1 hour 4.Keluar");
    if(question == 1) {

        fArtist();

    } else if(question == 2) {
        
        fGenre();

    } else if(question == 3) {
       
        fDuration();

    } else if(question == 4) {
        
        console.log("Sampai berjumpa kembali");
        return;

    } else if(question == 5) {
        
        fsong();

    }   else {
        console.log("harap masukan inputan yang tepat")
        return beginning();
}

function fArtist() {
    let inArtist = prompt("Masukan nama artis yang dicari")
    let filterArtist = songList.filter(function(obj) {
        return obj.artist === inArtist;
    } )

    console.log(...filterArtist);

    let again = confirm("Apakah anda ingin kembali ke menu awal?")
    if (again == true) {
        return beginning();
    } else {
        console.log("Sampai berjumpa lagi")
        return;
    }
}

function fGenre() {
    let inGenre = prompt("Masukan genre yang dicari")
    let filterGenre= songList.filter(function(obj) {
        return obj.genre === inGenre;
    }
    )
    console.log(...filterGenre);
    let again = confirm("Apakah anda ingin kembali ke menu awal?")
    if (again == true) {
        return beginning();
    } else {
        console.log("Sampai berjumpa lagi")
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
    let inSong = prompt("Masukan judul yang dicari")
    let findSong= songList.find(function(obj) {
        return obj.song === inSong;
    }
    )
    console.log(findSong);
    let again = confirm("Apakah anda ingin kembali ke menu awal?")
    if (again == true) {
        return beginning();
    } else {
        console.log("Sampai berjumpa lagi")
        return;
    }
} 


function fDuration() {
    let time = 60;
    let songDuration = 0;
    let playlist = [];

    
    
    
    for(let i=0; i<songList.length; i++){
        songDuration += songList[i].duration;
        if(songDuration <= time){
            playlist[i] = ("Title : " +songList[i].song+ " Duration : "+songList[i].duration)
            console.log(playlist[i]);
            console.log("Playlist time: "+songDuration);
        }else{
            break;
        }
        
    }
   return beginning();
        
        
    } 
