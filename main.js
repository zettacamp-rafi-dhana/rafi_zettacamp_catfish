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



// let inputBooks;
// let stocks = 10;
// const disc = 50 / 100;
// let priceBook = 10000;
// let totalPrice;
// const tax = 10 / 100;

// function bookPurchase() {
// let wantToBuy = confirm('Want to buy in my store?');
// inputBooks = prompt(Enter the number of books you want to buy : (stocks : ${stocks}));
// for (inputBooks; inputBooks <= stocks; inputBooks) {
// if (stocks > 0 && inputBooks <= stocks) {
// totalPrice = priceBook * inputBooks;
// totalPrice = totalPrice - totalPrice * disc;
// totalPrice = totalPrice + totalPrice * tax;
// console.log(You buy ${inputBooks} Books);
// console.log(Total price : ${totalPrice});
// stocks = stocks - inputBooks;
// inputBooks = prompt(Enter the number of books you want to buy : (stocks : ${stocks}));
// } else if (stocks > 0 && inputBooks > stocks) {
// console.log(You can not buy more than stocks);
// console.log(${stocks} books left);
// } else {
// console.log('stock is running out');
// break;
// }
// }
// }













