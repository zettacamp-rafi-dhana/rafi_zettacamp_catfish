let price = 100000;
let diskon = 50;
let ppn = 10;
let afDiskon;
let afPpn;
let jumlah_buku;
let disprice;
let stocks = 5;
let creditMonths = ["a. 3 Bulan", "b. 6 Bulan", "c. 12 Bulan"];

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
        console.log("Beli" + (i+1) + "Buku, dengan harga Rp. " + afPpn); 
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
        let monthCredit = prompt("Pilih pengajuan kredit " + creditMonths+("a/b/c"));
        if(monthCredit == "a") {
                let a =0;
                let termCredit = [];
                let monthlyCredit = afPpn / 3;
                console.log("Total Kredit perbulan Rp. " + monthlyCredit);

                
                   do { 
                    console.log("Bulan " + monthlyCredit); 
                   a++;
                } while(a<=2);
            

                if(stocks > 0) {
                    konfirmasi()
            
            
                }
                
                
        } else if(monthCredit == "b") {
            let monthlyCredit = afPpn / 6;
                console.log("Total Kredit perbulan Rp. " + monthlyCredit);
                if(stocks > 0) {
                    konfirmasi()
            
            
                }
        } else if(monthCredit == "c") {
            let monthlyCredit = afPpn / 12;
                console.log("Total Kredit perbulan Rp. " + monthlyCredit);
                if(stocks > 0) {
                    konfirmasi()
            
            
                }
        }
        

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








