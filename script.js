console.log("Hello Console");
//document.write("Hello Browser!");

num=10;
console.log(num);
console.log(typeof(num));
num="Dev Gupta";
console.log(num);
console.log(typeof(num));
num=true;
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));

const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("True,Symbols are same" );
}
else{
    console.log("False,Symbols are not same");
}