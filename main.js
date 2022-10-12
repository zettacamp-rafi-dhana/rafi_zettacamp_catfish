let price = 100000;
let diskon = 50;
let ppn = 10;
let afDiskon;
let afPpn;
let jumlah_buku;
let disprice;
let stocks = 5;
let creditMonths = ["a. 3 Bulan ", " b. 6 Bulan ", " c. 12 Bulan"];

konfirmasi()

function purchase (price, diskon, ppn, beli) {
    afDiskon = 0;
    disprice = 0;
    afPpn = 0;
    price = 100000;
    diskon = 50;
    ppn = 10;
    if(beli > stocks)
    {
        console.log("maaf stock melebihi ketersedian")
        return konfirmasi()
    }

    diskon = price * diskon / 100;
    afDiskon = price - diskon;
    disprice = afDiskon * beli;
    ppn = disprice * ppn / 100;
    afPpn = disprice + ppn;

    for (let i = 0; beli> i ; i++) {
    if (i > (stocks - 1)) {
        console.log("Mohon maaf stock buku sudah habis");
        break;
    } else {
        console.log("Beli " + (i+1) + " Buku, dengan harga Rp. " + afPpn); 
    }
    console.log("Sisa stock buku " + (stocks - (i+1)));
    }

    console.log("Harga Buku Rp. " + price);
    console.log("Diskon Rp. " + diskon);
    console.log("Harga setelah diskon Rp. " + afDiskon);
    console.log("Total pajak Rp. " + ppn);
    console.log("Total Harga Rp. " + afPpn);
    stocks = stocks - beli ;
    console.log(stocks);
 
    let kredit = confirm("apakah anda ingin mengajukan kredit")
    if(kredit == true) {
        
        peminjaman()

    } else if(stocks > 0) {
        konfirmasi()


    }
    
}

function konfirmasi() { 
let beli = confirm("Apakah anda ingin membeli buku? (y/n)");

if (beli == true ) {
    
    
    purchase(price,diskon,ppn, prompt('mau beli berapa buku ? (stoks' +stocks+ ')'));
    
} else {
    
 console.log("sampai berjumpa lagi");
}

}

function peminjaman() {

    let monthCredit = prompt("Pilih pengajuan kredit " + creditMonths+(" Masukan saja 'angka' bulan yang anda mau"));
    if(monthCredit == 3) {
            let a =3;
            let termCredit = [];
            let monthlyCredit = afPpn / 3;
            console.log("Total Kredit perbulan Rp. " + monthlyCredit);
            

            for (i = 1; i <= a; i++) {
                monthCredit = monthlyCredit * i;
                termCredit.push({
                bulan: i,
                price:"Rp. "+ monthlyCredit,
                totall:"Rp. "+ monthCredit,
                }
                )
                }  
            console.log(...termCredit);
            
            if(stocks > 0) {
                konfirmasi()
        
        
            }
            
            
    } else if(monthCredit == 6) {
        
            let a =6;
            let termCredit = [];
            let monthlyCredit = afPpn / 6;
            console.log("Total Kredit perbulan Rp. " + monthlyCredit);
            

            for (i = 1; i <= a; i++) {
                monthCredit = monthlyCredit * i;
                termCredit.push({
                bulan: i,
                price:"Rp. "+ monthlyCredit,
                totall:"Rp. "+ monthCredit,
                }
                )
                }  
            console.log(...termCredit);
            
            if(stocks > 0) {
                konfirmasi()
        
        
            }
        
    } else if(monthCredit == 12) {
     
            let a =12;
            let termCredit = [];
            let monthlyCredit = afPpn / 12;
            console.log("Total Kredit perbulan Rp. " + monthlyCredit);
            

            for (i = 1; i <= a; i++) {
                monthCredit = monthlyCredit * i;
                termCredit.push({
                bulan: i,
                price:"Rp. "+ monthlyCredit,
                totall:"Rp. "+ monthCredit,
                }
                )
                }  
            console.log(...termCredit);
            
            if(stocks > 0) {
                konfirmasi()
        
        
            }
        }

}







