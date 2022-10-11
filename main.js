// let price;
// let diskon;
// const ppn = 10;
// let afDiskon;
// let afPpn;

// function purchase (price, diskon, ppn) {

//     diskon = price * diskon / 100;
//     afDiskon = price - diskon;
//     ppn = price * ppn / 100;
//     afPpn = afDiskon + ppn;

//     console.log("Harga Buku Rp. " + price);
//     console.log("Diskon Rp. " + diskon);
//     console.log("Harga setelah diskon Rp. " + afDiskon);
//     console.log("Total pajak Rp. " + ppn);
//     console.log("Total Harga Rp. " + afPpn);
// }


// let beli = confirm("Apakah anda ingin membeli buku? (y/n)");

// if (beli == true ) {
    
//     purchase(100000,20,ppn);
    
// } else {
    
//  console.log("sampai berjumpa lagi");
// }



let inputBooks;
let stocks = 10;
const disc = 50 / 100;
let priceBook = 10000;
let totalPrice;
const tax = 10 / 100;

function bookPurchase() {
let wantToBuy = confirm('Want to buy in my store?');
inputBooks = prompt("Enter the number of books you want to buy : " + stocks);
for (inputBooks; inputBooks <= stocks; inputBooks) {
if (stocks > 0 && inputBooks <= stocks) {
totalPrice = priceBook * inputBooks;
totalPrice = totalPrice - totalPrice * disc;
totalPrice = totalPrice + totalPrice * tax;
console.log("You buy" + inputBookss+ "Books");
console.log("Total price :" + totalPrice);
stocks = stocks - inputBooks;
inputBooks = prompt("Enter the number of books you want to buy :" + stocks);
} else if (stocks > 0 && inputBooks > stocks) {
console.log("You can not buy more than stocks");
console.log(stocks+ "books left");
} else {
console.log('stock is running out');
break;
}
}
}




// let beli = confirm('kau beli buku dak?');
// /* JavaScript if statement */
// if (beli == true) {
// let buku = prompt('mau beli buku apa? (html/javascript)');
// if (buku == "html") {

// function purchasing(price, diskon, tax, beli) {


// let stock = 5;
// let amountprice = 0;
// const pricediskon = price * diskon / 100;
// const afterdiskon = price - pricediskon;
// const pricetax = price * tax / 100;
// const aftertax = price + pricetax;
// const total = price - pricediskon + pricetax;


// for (let i = 0; beli > i; i++) {
// if (i > (stock - 1)) {
// // console.log('| Total Rp' + (beli*total));
// console.log('maaf, stok sudah habis');
// break;
// } else {
// console.log('>> beli ' + (i + 1) + ' buku, harga = Rp' + (amountprice += total));
// }
// console.log('sisa stock = ' + (stock - (i + 1)));
// }



// console.log("|--------------------------------------|");
// console.log("| Hello World |");
// console.log("| Welcome to our olshop |");
// console.log("|--------------------------------------|");
// console.log("| Belanjaan anda memperoleh |");
// console.log("| Diskon sebesar 15% dan ada tax 5% |");
// console.log("|======================================|");
// console.log(|   harga buku HTML  Rp${price}        |);
// console.log('| Amount of discount Rp' + pricediskon + " |");
// console.log('| Price after discount Rp' + afterdiskon + " |");
// console.log('| Amount of tax Rp' + pricetax + " |");
// console.log('| Price after tax Rp' + aftertax + " |");
// console.log("|--------------------------------------|");
// console.log(|   Total                  Rp ${amountprice}   |);
// console.log("|--------------------------------------|");
// }

// purchasing(50000, 15, 5, prompt('mau beli berapa buku ? (stok 5)'));

// } else if (buku == "javascript") {
// function purchasing(price, diskon, tax, beli) {

// let stock = 10;
// let amountprice = 0;
// const pricediskon = price * diskon / 100;
// const afterdiskon = price - pricediskon;
// const pricetax = price * tax / 100;
// const aftertax = price + pricetax;
// const total = price - pricediskon + pricetax;

// for (let i = 0; beli > i; i++) {

// if (i > (stock - 1)) {
// // console.log('| Total Rp' + (beli*total));
// console.log('maaf, stok sudah habis');
// break;
// } else {
// console.log('>> beli ' + (i + 1) + ' buku, harga = Rp' + (amountprice += total));
// }
// console.log('sisa stock = ' + (stock - (i + 1)));
// }

// console.log("|--------------------------------------|");
// console.log("| Hello World |");
// console.log("| Welcome to our olshop |");
// console.log("|--------------------------------------|");
// console.log("| Belanjaan anda memperoleh |");
// console.log("| Diskon sebesar 15% dan ada tax 5% |");
// console.log("|======================================|");
// console.log('| harga buku Javascript Rp' + price + " |");
// console.log('| Amount of discount Rp' + pricediskon + " |");
// console.log('| Price after discount Rp' + afterdiskon + " |");
// console.log('| Amount of tax Rp' + pricetax + " |");
// console.log('| Price after tax Rp' + aftertax + " |");
// console.log("|--------------------------------------|");
// console.log('| Total Rp' + amountprice + " |");
// console.log("|--------------------------------------|");

// }

// purchasing(100000, 20, 7, prompt('mau beli berapa buku ? (stok 10)'));
// } else {
// console.log("buku yang sedang anda cari tidak tersedia")
// }

// } else {
// console.log("Selamat Datang Kembali")
// }








