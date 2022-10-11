let price;
let diskon;
const ppn = 10;
let afDiskon;
let afPpn;

function purchase (price, diskon, ppn) {

    diskon = price * diskon / 100;
    afDiskon = price - diskon;
    ppn = price * ppn / 100;
    afPpn = afDiskon + ppn;

    console.log("Harga Buku Rp. " + price);
    console.log("Diskon Rp. " + diskon);
    console.log("Harga setelah diskon Rp. " + afDiskon);
    console.log("Total pajak Rp. " + ppn);
    console.log("Total Harga Rp. " + afPpn);


}


let beli = confirm("Apakah anda ingin membeli buku? (y/n)");

if (beli == true ) {
    
    purchase(100000,20,ppn);
    
} else {
    
 console.log("sampai berjumpa lagi");
}
















