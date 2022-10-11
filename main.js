let price = 100000;
let diskon = 15;
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
   
    purchase(price,diskon,ppn);
    
} else {
    
 console.log("sampai berjumpa lagi");
}
















