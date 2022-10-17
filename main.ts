console.log('tes');

type combi = number | string;



let case4: (number | string)[] = [1, 'data', 3, 'result'];
let case5: (number | string)[] = ['Bejo', 'has', '4', 'sport', 'car', 'and', 2, 'bike'];


function union1(a: any): string {

return a.join(' ');

}

console.log(union1(case4));
console.log(union1(case5));



let case6: (combi)[] = [1, 'data', 3, 'result'];
let case7: (combi)[] = ['Bejo', 'has', '4', 'sport', 'car', 'and', 2, 'bike'];


console.log(union1(case6));
console.log(union1(case7));

type tes1 = {name:string, age:number, gender:boolean};
let arr1 : tes1 = {name:'udin',age:21,gender:true}

function cuba1(arr1: tes1) {
    if(arr1.gender==true) {
        console.log(arr1.name+ " laki-laki");
    } else {
        console.log(arr1.name+ " perempuan");
    }
}

cuba1(arr1);

// from udemy.
// function case1(input1:string|number, 
//     input2:string|number, 
//     input3:string|number, 
//     input4:string|number)
//  : string {
// let result;
// if (input1==='number' && input2==='number' && input3==='number' && input4==='number') {

// result = input1 + input2 + input3 + input4;

// } else {
// result = input1.toString()+' ' + input2.toString()+' ' + input3.toString()+' ' + input4.toString();
// }
// return result;
// }

// function case2(input1:string|number, 
//     input2:string|number, 
//     input3:string|number, 
//     input4:string|number, 
//     input5:string|number)
//     : string {
// let result;
// if (input1==='number' && input2==='number' && input3==='number' && input4==='number' && input5==='number') {

// result = input1 + input2 + input3 + input4;

// } else {
// result = input1.toString()+' ' + input2.toString()+' ' + input3.toString()+' ' + input4.toString()+' ' + input5.toString();
// }
// return result;
// }


// const uni1 = case1(1,'data','3','result');
// console.log(uni1);

// const uni2 = case2('Bejo', 'has', '4', 'sport', 'car');
// console.log(uni2);


// // type combi = number | string;

// function case3(input1:combi, 
//     input2:combi, 
//     input3:combi, 
//     input4:combi)
//  : string {
// let result;
// if (input1==='number' && input2==='number' && input3==='number' && input4==='number') {

// result = input1 + input2 + input3 + input4;

// } else {
// result = input1.toString()+' ' + input2.toString()+' ' + input3.toString()+' ' + input4.toString();
// }
// return result;
// }


// const uni3 = case3(1,'data','3','result');
// console.log(uni1);