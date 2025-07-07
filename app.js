// function sum(a,b){
//     return a+b;
// }

// let res1 = sum(2,3);
// console.log(res1);

// let product = function(a,b){
//     return a*b;
// }
// console.log(product);
// console.log(product(2,6));

// (function(name)  {
//     console.log("Hello" +name);
// })("xyzz");

// (function modulus(a,b){
//     console.log(a%b)
// })(2,3)

// let sum=(a,b,c) => a+b+c;
// console.log(sum(2,3,4));
// console.log(typeof sum()); //function
// console.log(typeof NaN) //number

// let greet = name => "Hello " +name;
// console.log(greet("xyz"))


function calculator(a,b,op){
    return op(a,b)
};

function add(x,y){
  return x+y;
}

let res1 = calculator(5,2,add);
console.log(res1); //7

let res2 = calculator(5,2,function(x,y){
  return x-y
});
console.log(res2); //3

let product=function(x,y){
  return x*y;
}
let res3 = calculator(5,2,product);
console.log(res3); //10

let res4 =calculator(5,2,(a,b)=>a%b);
console.log(res4); //1

