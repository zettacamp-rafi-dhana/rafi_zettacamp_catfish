console.log("hello world")

    let txt = "Learning Typescript is different than Javascript";
    const num1 = 9;
    const num2 = 19;

function slice(txt:string , num1:number, num2:number): string {
    
    let sliced = txt.slice(num1, num2);
    return sliced;
}

console.log(slice(txt, num1, num2));
